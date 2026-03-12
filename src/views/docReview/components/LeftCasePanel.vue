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
          </div>
          <div class="material-meta">{{ item.category }} · {{ item.size }} · {{ item.page }}页</div>
          <div class="material-foot">
            <span>{{ item.updatedAt }}</span>
            <button type="button" class="wb-btn wb-btn-text" @click.stop="openPreview(item)">预览</button>
          </div>
        </li>
      </ul>

      <div class="module-wrap">
        <div class="section-title section-title-tight">庭审记录提取</div>
        <button
          v-for="module in reviewModules"
          :key="module.key"
          type="button"
          class="wb-btn module-btn"
          :class="{ active: activeModuleKey === module.key }"
          @click="handleSelectModule(module)"
        >
          <span class="module-icon" :class="`module-icon-${module.key}`" v-html="getModuleIcon(module.key)"></span>
          {{ module.label }}
        </button>
      </div>

      <div v-if="previewMaterial" class="preview-mask" @click.self="previewMaterial = null">
        <div class="wb-card file-preview-dialog">
          <div class="preview-head">
            <div>
              <div class="preview-title">{{ previewMaterial.title }}</div>
              <div class="preview-sub">
                <span class="meta-pill">{{ materialTypeText(previewMaterial.type) }}</span>
                <span class="meta-pill">{{ previewMaterial.size }}</span>
              </div>
            </div>
            <button type="button" class="wb-btn" @click="previewMaterial = null">关闭</button>
          </div>
          <div class="preview-toolbar">
            <button type="button" class="toolbar-pill">上一页</button>
            <button type="button" class="toolbar-pill">下一页</button>
            <span class="toolbar-page">第 1 / {{ Math.max(1, previewMaterial.page) }} 页</span>
            <button type="button" class="toolbar-pill">缩小</button>
            <button type="button" class="toolbar-pill">100%</button>
            <button type="button" class="toolbar-pill">放大</button>
          </div>
          <div class="preview-body file-preview-body">
            <div class="file-page">
              <div class="file-page-title">{{ previewMaterial.title }}</div>
              <div class="file-page-meta">来源：{{ previewMaterial.category }} ｜ 更新时间：{{ previewMaterial.updatedAt }}</div>
              <div class="file-page-content">{{ materialPreviewText(previewMaterial) }}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeModuleDialog" class="preview-mask" @click.self="closeModuleDialog">
        <div class="wb-card module-dialog">
          <div class="module-dialog-head">
            <div class="module-dialog-title">{{ activeModuleDialog.title }}</div>
            <button type="button" class="wb-btn wb-btn-text module-dialog-close" @click="closeModuleDialog">✕</button>
          </div>

          <ul v-if="activeModuleDialog.bullets" class="module-bullet-list">
            <li v-for="(item, idx) in activeModuleDialog.bullets" :key="`b-${idx}`">{{ item }}</li>
          </ul>

          <div v-if="activeModuleDialog.sections" class="module-section-list">
            <div v-for="(item, idx) in activeModuleDialog.sections" :key="`s-${idx}`" class="module-section-card">
              <div class="module-section-title">{{ item.heading }}</div>
              <div class="module-section-content">{{ item.content }}</div>
              <div class="module-section-quote">原话：{{ item.quote }}</div>
            </div>
          </div>

          <div v-if="activeModuleDialog.focuses" class="focus-list">
            <div v-for="(focus, idx) in activeModuleDialog.focuses" :key="`f-${idx}`" class="focus-card">
              <div class="focus-title">{{ focus.question }}</div>
              <div class="focus-party">
                <div class="focus-party-title">申请方主张与论证</div>
                <div class="focus-text">观点：{{ focus.applicant.view }}</div>
                <ul class="focus-evidence-list">
                  <li v-for="(line, lineIdx) in focus.applicant.evidence" :key="`fa-${idx}-${lineIdx}`">{{ line }}</li>
                </ul>
                <div class="focus-statement">关键庭审陈述：{{ focus.applicant.statement }}</div>
              </div>
              <div class="focus-party">
                <div class="focus-party-title">被申请方主张与论证</div>
                <div class="focus-text">观点：{{ focus.respondent.view }}</div>
                <ul class="focus-evidence-list">
                  <li v-for="(line, lineIdx) in focus.respondent.evidence" :key="`fr-${idx}-${lineIdx}`">{{ line }}</li>
                </ul>
                <div class="focus-statement">关键庭审陈述：{{ focus.respondent.statement }}</div>
              </div>
              <div class="focus-conclusion">证据对抗小结：{{ focus.conclusion }}</div>
            </div>
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

interface ReviewModule {
  key: string;
  label: string;
  paragraphId: string;
}

const props = defineProps<{
  summary: CaseSummary;
  materials: MaterialItem[];
  reviewModules: ReviewModule[];
  moduleDialogs: Record<string, any>;
  activeModuleKey: string;
}>();

const emit = defineEmits(['select-module']);
const previewMaterial = ref<MaterialItem | null>(null);
const activeModuleDialog = ref<any>(null);

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

const materialPreviewText = (item: MaterialItem) => {
  return `【文件摘要】\n${item.previewText}\n\n【卷内位置】\n共 ${item.page} 页，建议重点核对签章信息、金额口径与时间节点。\n\n【审查建议】\n1. 比对与裁决主文相关金额是否一致；\n2. 对关键事实对应页做证据编号标注；\n3. 对存在异议内容补充原始证明材料。`;
};

const handleSelectModule = (module: ReviewModule) => {
  emit('select-module', module);
  const dialogs = props.moduleDialogs || {};
  activeModuleDialog.value = dialogs[module.key] || null;
};

const closeModuleDialog = () => {
  activeModuleDialog.value = null;
};

const getModuleIcon = (key: string) => {
  if (key === 'coreClaim') {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"></path><path d="M12 3v18"></path><circle cx="12" cy="12" r="9"></circle></svg>';
  }
  if (key === 'undisputedFact') {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>';
  }
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="M19 9l-5 5-4-4-3 3"></path></svg>';
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
.module-wrap {
  border-top: 1px solid var(--color-divider);
  padding-top: 14px;
}
.section-title-tight {
  margin-bottom: 8px;
}
.module-btn {
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 8px;
  gap: 8px;
  border-color: #c9d8ff;
  background: #fff;
  color: #0f2a58;
}
.module-btn:last-child {
  margin-bottom: 0;
}
.module-btn.active {
  border-color: #7fa4ff;
  background: #eff4ff;
  color: #1d3f8f;
}
.module-icon {
  display: inline-flex;
  align-items: center;
}
.module-icon-coreClaim {
  color: #2563eb;
}
.module-icon-undisputedFact {
  color: #1d4ed8;
}
.module-icon-justiceFocus {
  color: #3b82f6;
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
.file-preview-dialog {
  width: min(980px, calc(100vw - 48px));
  max-height: calc(100vh - 48px);
  padding: 0;
  overflow: hidden;
}
.preview-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-border);
  background: #f9fbff;
}
.preview-title {
  font-size: 14px;
  font-weight: 600;
}
.preview-sub {
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.meta-pill {
  font-size: 12px;
  color: #4b5f86;
  background: #edf3ff;
  border: 1px solid #d5e4ff;
  border-radius: 4px;
  padding: 1px 8px;
}
.preview-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-bottom: 1px solid var(--color-border);
  background: #fff;
}
.toolbar-pill {
  border: 1px solid #dbe5f6;
  border-radius: 6px;
  background: #fff;
  color: #2a3f68;
  font-size: 12px;
  padding: 4px 10px;
}
.toolbar-page {
  margin: 0 4px 0 8px;
  color: #5b6f93;
  font-size: 12px;
}
.preview-body {
  background: #eef3fb;
}
.file-preview-body {
  overflow: auto;
  padding: 20px;
  max-height: calc(100vh - 220px);
}
.file-page {
  width: min(760px, calc(100% - 12px));
  margin: 0 auto;
  min-height: 760px;
  background: #fff;
  border: 1px solid #d6dfef;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
  padding: 28px 32px;
}
.file-page-title {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #1f3258;
}
.file-page-meta {
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #6a7d9f;
}
.file-page-content {
  margin-top: 18px;
  font-size: 14px;
  line-height: 1.85;
  color: #1e2f4d;
  white-space: pre-wrap;
}
.module-dialog {
  width: min(980px, calc(100vw - 48px));
  max-height: calc(100vh - 56px);
  padding: 16px;
  overflow: auto;
}
.module-dialog-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.module-dialog-title {
  font-size: 24px;
  font-weight: 700;
  color: #13203d;
}
.module-dialog-close {
  font-size: 18px;
}
.module-bullet-list {
  border: 1px solid #e7edfb;
  border-radius: 12px;
  background: #fff;
  padding: 18px 26px;
}
.module-bullet-list li {
  font-size: 18px;
  line-height: 1.9;
  color: #1c2e56;
}
.module-section-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.module-section-card {
  border: 1px solid #e4ebfa;
  border-radius: 12px;
  padding: 14px 16px;
}
.module-section-title {
  font-size: 18px;
  font-weight: 700;
  color: #13203d;
  margin-bottom: 6px;
}
.module-section-content {
  font-size: 16px;
  color: #1d2d4d;
  line-height: 1.7;
}
.module-section-quote {
  margin-top: 8px;
  font-size: 15px;
  color: #5d6f95;
  line-height: 1.7;
}
.focus-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.focus-card {
  border: 1px solid #e3ebfb;
  border-radius: 12px;
  padding: 14px;
}
.focus-title {
  font-size: 19px;
  font-weight: 700;
  color: #1b2a4c;
  margin-bottom: 10px;
}
.focus-party {
  margin-bottom: 10px;
}
.focus-party-title {
  font-size: 16px;
  font-weight: 700;
  color: #1d3666;
  margin-bottom: 4px;
}
.focus-text {
  font-size: 15px;
  line-height: 1.7;
  color: #1d2d4d;
}
.focus-evidence-list {
  padding-left: 20px;
  margin: 4px 0 0;
}
.focus-evidence-list li {
  font-size: 15px;
  line-height: 1.7;
  color: #1d2d4d;
}
.focus-statement {
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.7;
  color: #425980;
}
.focus-conclusion {
  margin-top: 6px;
  padding: 10px 12px;
  border: 1px solid #9ec1ff;
  border-radius: 10px;
  background: #eef5ff;
  font-size: 14px;
  line-height: 1.7;
  color: #1f3f76;
}
</style>
