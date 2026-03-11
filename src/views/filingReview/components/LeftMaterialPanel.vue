<template>
  <div class="left-panel">
    <div class="panel-header panel-header-themed">
      <span class="module-title">材料清单</span>
    </div>
    <div class="panel-content material-content">
      <div class="material-overview">
        <span class="overview-chip normal">已收 {{ normalCount }} 项</span>
        <span class="overview-chip missing">缺失 {{ missingCount }} 项</span>
        <span class="overview-chip required">必传 {{ requiredCount }} 项</span>
      </div>

      <ul class="material-list">
        <li v-for="item in materials" :key="item.id" class="material-item" @click="openPreview(item)">
          <div class="item-head">
            <div class="item-main">
              <div class="item-title-wrap">
                <span v-if="item.required" class="required-icon" title="必传材料">必</span>
                <span class="item-title" :class="{ missing: item.status === 'missing' }">
                  {{ item.title }}
                </span>
              </div>

              <div class="file-meta-row">
                <span class="file-type-chip">{{ item.fileType }}</span>
                <span class="file-size-chip">{{ item.fileSize }}</span>
                <span class="status-chip" :class="item.status">{{ item.status === 'normal' ? '已收齐' : '待补充' }}</span>
              </div>
            </div>

            <div class="item-side">
              <span v-if="item.status === 'normal'" class="status-icon success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              <span v-else class="status-icon danger">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </span>
            </div>
          </div>

          <div v-if="item.tip" class="material-tip">{{ item.tip }}</div>

          <div v-if="item.status === 'missing'" class="upload-row" @click.stop>
            <label class="wb-btn upload-btn">
              上传补充材料
              <input type="file" class="file-input" @change="onFileChange(item.id, $event)" />
            </label>
            <span v-if="uploadedFiles[item.id]" class="upload-file-name">{{ uploadedFiles[item.id] }}</span>
            <span v-else class="upload-placeholder">未上传</span>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="previewingItem" class="preview-overlay" @click="previewingItem = null">
      <div class="preview-dialog" @click.stop>
        <div class="preview-dialog-header">
          <div class="preview-dialog-title-area">
            <div class="preview-dialog-title">{{ previewingItem.title }}</div>
            <div class="preview-dialog-meta">
              <span class="meta-item">{{ previewingItem.fileType }}</span>
              <span class="meta-divider">·</span>
              <span class="meta-item">{{ previewingItem.fileSize }}</span>
              <span class="meta-divider">·</span>
              <span class="meta-item" :class="previewingItem.status === 'normal' ? 'status-normal' : 'status-missing'">
                {{ previewingItem.status === 'normal' ? '已收齐' : '待补充' }}
              </span>
            </div>
          </div>
          <button type="button" class="wb-btn close-btn" @click="previewingItem = null">关闭</button>
        </div>
        <div class="preview-dialog-body">
          <div class="preview-content">{{ previewingItem.previewContent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface MaterialItem {
  id: string;
  title: string;
  fileType: string;
  fileSize: string;
  required: boolean;
  status: string;
  tip?: string;
  previewContent: string;
}

const props = defineProps<{
  materials: MaterialItem[];
}>();

const missingCount = computed(() => props.materials.filter((item) => item.status === 'missing').length);
const normalCount = computed(() => props.materials.filter((item) => item.status === 'normal').length);
const requiredCount = computed(() => props.materials.filter((item) => item.required).length);
const uploadedFiles = ref<Record<string, string>>({});
const previewingItem = ref<MaterialItem | null>(null);

const onFileChange = (id: string, event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  uploadedFiles.value[id] = file.name;
};

const openPreview = (item: MaterialItem) => {
  previewingItem.value = item;
};
</script>

<style scoped>
.material-content {
  padding: 12px;
}
.material-overview {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.overview-chip {
  font-size: 12px;
  border-radius: 999px;
  padding: 3px 10px;
  border: 1px solid transparent;
}
.overview-chip.normal {
  color: #0f7d4d;
  background: #eaf8f1;
  border-color: #c8efd9;
}
.overview-chip.missing {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.overview-chip.required {
  color: #1f4ad8;
  background: #edf3ff;
  border-color: #d4e2ff;
}
.material-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}
.material-item {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 12px;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s ease;
}
.material-item:hover {
  border-color: #b9ccf0;
  background: #fafcff;
}
.item-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.item-main {
  min-width: 0;
  flex: 1;
}
.item-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  flex-shrink: 0;
}
.item-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}
.status-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.status-icon.success {
  color: var(--color-success);
}
.status-icon.danger {
  color: var(--color-danger);
}
.item-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-title);
}
.item-title.missing {
  color: var(--color-text-disabled);
}
.required-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 18px;
  border-radius: 4px;
  background: #fff1f2;
  color: #e11d48;
  border: 1px solid #fecdd3;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
  flex-shrink: 0;
}
.file-meta-row {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.file-type-chip,
.file-size-chip {
  font-size: 11px;
  line-height: 18px;
  border-radius: 999px;
  border: 1px solid #dbe4f5;
  background: #f8fbff;
  color: #486184;
  padding: 0 8px;
}
.status-chip {
  font-size: 11px;
  line-height: 18px;
  border-radius: 999px;
  padding: 0 8px;
  border: 1px solid transparent;
}
.status-chip.normal {
  color: #0f7d4d;
  background: #eaf8f1;
  border-color: #c8efd9;
}
.status-chip.missing {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.material-tip {
  margin-top: 10px;
  font-size: 12px;
  color: var(--color-text-sub);
  line-height: 1.5;
}
.upload-row {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.upload-btn {
  min-height: 26px;
  padding: 0 10px;
  font-size: 12px;
}
.file-input {
  display: none;
}
.upload-file-name {
  font-size: 12px;
  color: #1d4ed8;
}
.upload-placeholder {
  font-size: 12px;
  color: var(--color-text-disabled);
}
.preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.35);
}
.preview-dialog {
  width: 900px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
  overflow: hidden;
}
.preview-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--color-border);
  background: #fafcff;
}
.preview-dialog-title-area {
  flex: 1;
  min-width: 0;
}
.preview-dialog-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-title);
}
.preview-dialog-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}
.meta-item {
  font-size: 12px;
  color: var(--color-text-sub);
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 4px;
}
.meta-item.status-normal {
  color: #0f7d4d;
  background: #eaf8f1;
}
.meta-item.status-missing {
  color: #c93f3f;
  background: #fff0f0;
}
.meta-divider {
  color: var(--color-text-disabled);
}
.close-btn {
  flex-shrink: 0;
}
.preview-dialog-body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #fff;
}
.preview-content {
  font-size: 13px;
  line-height: 1.8;
  color: var(--color-text-body);
  white-space: pre-wrap;
  font-family: 'Consolas', 'Microsoft YaHei', monospace;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  min-height: 400px;
}
</style>
