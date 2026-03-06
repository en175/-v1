<template>
  <div class="left-panel">
    <div class="panel-header">案件概览</div>
    <div class="panel-content case-panel-content">
      <div class="wb-card summary-card">
        <div class="case-no">{{ summary.caseNo }}</div>
        <div class="case-parties">{{ summary.parties }}</div>
        <div class="case-meta">秘书：{{ summary.secretary }} | 庭审：{{ summary.hearingDate }}</div>
      </div>

      <div class="section-title">案件材料</div>
      <ul class="wb-list section-list">
        <li v-for="item in materials" :key="item.id" class="wb-list-item material-item">
          <div class="material-head">
            <span class="material-title">{{ item.title }}</span>
            <span class="material-type">{{ materialTypeText(item.type) }}</span>
          </div>
          <div class="material-meta">{{ item.category }} · {{ item.size }} · {{ item.page }}页</div>
          <div class="material-foot">
            <span>{{ item.updatedAt }}</span>
            <button type="button" class="wb-btn wb-btn-text" @click.stop="openPreview(item)">预览</button>
          </div>
        </li>
      </ul>

      <div class="section-title">庭审记录</div>
      <div class="hearing-wrap">
        <div v-for="record in hearingRecords" :key="record.id" class="hearing-card">
          <div class="hearing-head">
            <span class="hearing-title">{{ record.title }}</span>
            <span class="hearing-date">{{ record.date }}</span>
          </div>
          <div v-for="row in record.modules" :key="row.id" class="hearing-row">
            <span>{{ row.name }}</span>
            <span>{{ row.detail }}</span>
          </div>
        </div>
      </div>

      <div class="module-wrap">
        <button
          v-for="module in reviewModules"
          :key="module.key"
          type="button"
          class="wb-btn module-btn"
          :class="{ active: activeModuleKey === module.key }"
          @click="handleSelectModule(module)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          {{ module.label }}
        </button>
      </div>

      <div v-if="previewMaterial" class="preview-mask" @click.self="previewMaterial = null">
        <div class="wb-card preview-dialog">
          <div class="preview-head">
            <div>
              <div class="preview-title">{{ previewMaterial.title }}</div>
              <div class="preview-sub">{{ previewMaterial.category }} · {{ materialTypeText(previewMaterial.type) }}</div>
            </div>
            <button type="button" class="wb-btn" @click="previewMaterial = null">关闭</button>
          </div>
          <div class="preview-body">
            <div v-if="previewMaterial.type === 'xlsx'" class="preview-table">
              <div class="table-row table-head"><span>证据编号</span><span>材料名称</span><span>页码</span></div>
              <div class="table-row"><span>证据1-1</span><span>购销合同</span><span>1-6</span></div>
              <div class="table-row"><span>证据4-2</span><span>对账邮件</span><span>21-24</span></div>
            </div>
            <div v-else-if="previewMaterial.type === 'image'" class="preview-media">图片预览：可查看签章清晰度与签署日期</div>
            <div v-else-if="previewMaterial.type === 'audio'" class="preview-media">音频预览：庭审质证录音摘要可回放</div>
            <div v-else-if="previewMaterial.type === 'video'" class="preview-media">视频预览：供货验收过程关键片段</div>
            <div v-else class="preview-text">{{ previewMaterial.previewText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MaterialItem {
  id: string;
  title: string;
  type: string;
  category: string;
  page: number;
  size: string;
  updatedAt: string;
  previewText: string;
}

interface CaseSummary {
  caseNo: string;
  parties: string;
  secretary: string;
  hearingDate: string;
}

interface HearingRecord {
  id: string;
  title: string;
  date: string;
  modules: Array<{ id: string; name: string; detail: string }>;
}

interface ReviewModule {
  key: string;
  label: string;
  paragraphId: string;
}

defineProps<{
  summary: CaseSummary;
  materials: MaterialItem[];
  hearingRecords: HearingRecord[];
  reviewModules: ReviewModule[];
  activeModuleKey: string;
}>();

const emit = defineEmits(['select-module']);
const previewMaterial = ref<MaterialItem | null>(null);

const materialTypeText = (value: string) => {
  if (value === 'docx') return '文书';
  if (value === 'pdf') return '文档';
  if (value === 'xlsx') return '表格';
  if (value === 'image') return '图片';
  if (value === 'audio') return '音频';
  if (value === 'video') return '视频';
  return '材料';
};

const openPreview = (item: MaterialItem) => {
  previewMaterial.value = item;
};

const handleSelectModule = (module: ReviewModule) => {
  emit('select-module', module);
};
</script>

<style scoped>
.case-panel-content {
  padding: 16px;
}
.summary-card {
  padding: 16px;
  margin-bottom: 16px;
  background: #f7f8fa;
}
.case-no {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
}
.case-parties {
  font-size: 12px;
  color: var(--color-text-sub);
  margin-bottom: 4px;
}
.case-meta {
  font-size: 12px;
  color: var(--color-text-sub);
}
.section-title {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 14px;
}
.section-list {
  margin-bottom: 14px;
}
.material-item {
  padding: 10px 0;
  border: none;
}
.material-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.material-title {
  font-size: 13px;
  font-weight: 600;
}
.material-type {
  font-size: 12px;
  color: var(--color-primary);
}
.material-meta {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.material-foot {
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--color-text-sub);
}
.hearing-wrap {
  margin-bottom: 14px;
}
.hearing-card {
  border: 1px solid #dbe7ff;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 8px;
}
.hearing-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.hearing-title {
  font-size: 13px;
  font-weight: 600;
}
.hearing-date {
  font-size: 12px;
  color: var(--color-text-sub);
}
.hearing-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--color-text-body);
  line-height: 1.8;
}
.module-wrap {
  border-top: 1px solid var(--color-divider);
  padding-top: 14px;
}
.module-btn {
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 8px;
  gap: 8px;
}
.module-btn:last-child {
  margin-bottom: 0;
}
.module-btn.active {
  border-color: #b9ccff;
  background: #f4f8ff;
  color: #2648a8;
}
.preview-mask {
  position: fixed;
  inset: 0;
  z-index: 1500;
  background: rgba(15, 23, 42, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview-dialog {
  width: 680px;
  max-width: calc(100vw - 48px);
  padding: 16px;
}
.preview-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.preview-title {
  font-size: 14px;
  font-weight: 600;
}
.preview-sub {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.preview-body {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 12px;
  min-height: 150px;
  background: #fff;
}
.preview-text {
  font-size: 13px;
  line-height: 1.7;
}
.preview-media {
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-body);
  background: #f8fafc;
  border: 1px dashed #d6deef;
  border-radius: 8px;
  padding: 14px;
}
.preview-table {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}
.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
.table-row span {
  padding: 8px 10px;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  font-size: 12px;
}
.table-row span:last-child {
  border-right: none;
}
.table-row:last-child span {
  border-bottom: none;
}
.table-head span {
  background: #f8fafc;
  font-weight: 600;
}
</style>
