<template>
  <div class="left-panel">
    <div class="panel-header panel-header-themed">请求导航</div>
    <div class="panel-content">
      <div class="request-summary">
        <div class="summary-label">当前主审请求</div>
        <div class="summary-value">{{ currentRequest.requestStatement }}</div>
      </div>

      <div class="section-head">
        <span class="section-title">请求列表</span>
        <span class="section-count">{{ requests.length }} 项</span>
      </div>
      <div class="request-list">
        <button
          v-for="item in requests"
          :key="item.id"
          type="button"
          class="request-item"
          :class="{ active: selectedRequestId === item.id }"
          @click="$emit('select-request', item.id)"
        >
          <div class="request-top">
            <span class="request-title">{{ item.title }}</span>
            <span class="request-status" :class="strengthClass(item.evidenceStrength)">
              {{ strengthText(item.evidenceStrength) }}
            </span>
          </div>
          <div class="request-text">{{ item.requestStatement }}</div>
          <div class="request-meta">
            <span>要件 {{ item.elementCount }}</span>
            <span>{{ item.hasDefense ? `抗辩 ${item.defenseCount}` : '无抗辩' }}</span>
          </div>
        </button>
      </div>

      <div class="section-head materials-head">
        <span class="section-title">卷宗材料</span>
        <span class="section-count">{{ materials.length }} 份</span>
      </div>
      <ul class="wb-list material-list">
        <li
          v-for="item in materials"
          :key="item.id"
          class="wb-list-item material-item"
          :class="{ active: selectedMaterialId === item.id }"
          @click="openMaterialPreview(item)"
        >
          <div class="material-title-row">
            <span class="material-title">{{ item.title }}</span>
            <span class="wb-badge" :class="reliabilityClass(item.reliability)">
              {{ reliabilityText(item.reliability) }}
            </span>
          </div>
          <div class="material-meta">
            <span>{{ item.source }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="showPreviewDialog && previewMaterial" class="dialog-overlay" @click.self="closePreviewDialog">
      <div class="preview-dialog">
        <div class="preview-dialog-header">
          <div class="preview-dialog-title-area">
            <div class="preview-dialog-title">{{ previewMaterial.title }}</div>
            <div class="preview-dialog-meta">
              <span class="meta-item">{{ previewMaterial.format }}</span>
              <span class="meta-divider">·</span>
              <span class="meta-item">{{ previewMaterial.fileSize }}</span>
            </div>
          </div>
          <button type="button" class="wb-btn close-btn" @click="closePreviewDialog">关闭</button>
        </div>
        <div class="preview-dialog-body">
          <div class="preview-content">{{ previewMaterial.previewContent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { MaterialItem, RequestNavItem } from '../config';

const props = defineProps<{
  materials: MaterialItem[];
  requests: RequestNavItem[];
  selectedRequestId: string;
  selectedMaterialId: string;
}>();

const emit = defineEmits<{
  (e: 'select-request', requestId: string): void;
  (e: 'select-material', materialId: string): void;
}>();

const showPreviewDialog = ref(false);
const previewMaterial = ref<MaterialItem | null>(null);

const currentRequest = computed(() => props.requests.find((item) => item.id === props.selectedRequestId) || props.requests[0]!);

const openMaterialPreview = (material: MaterialItem) => {
  previewMaterial.value = material;
  showPreviewDialog.value = true;
  emit('select-material', material.id);
};

const closePreviewDialog = () => {
  showPreviewDialog.value = false;
};

const reliabilityClass = (value: MaterialItem['reliability']) => {
  if (value === 'high') return 'wb-badge-success';
  if (value === 'medium') return 'wb-badge-warning';
  return 'wb-badge-danger';
};

const reliabilityText = (value: MaterialItem['reliability']) => {
  if (value === 'high') return '高可信';
  if (value === 'medium') return '中可信';
  return '待核验';
};

const strengthClass = (value: RequestNavItem['evidenceStrength']) => {
  if (value === 'strong') return 'strength-strong';
  if (value === 'medium') return 'strength-medium';
  return 'strength-weak';
};

const strengthText = (value: RequestNavItem['evidenceStrength']) => {
  if (value === 'strong') return '证据充分';
  if (value === 'medium') return '证据一般';
  return '证据薄弱';
};
</script>

<style scoped>
.request-summary {
  padding: 12px;
  border: 1px solid #d9e4f5;
  border-radius: 10px;
  background: #f8fbff;
  margin-bottom: 14px;
}
.summary-label {
  font-size: 12px;
  color: var(--color-text-sub);
}
.summary-value {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--color-text-title);
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.section-title {
  font-size: 12px;
  color: var(--color-text-sub);
}
.section-count {
  font-size: 11px;
  color: var(--color-text-disabled);
}
.request-list {
  display: grid;
  gap: 8px;
}
.request-item {
  text-align: left;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  cursor: pointer;
}
.request-item.active {
  border-color: #8eaef3;
  background: #f5f8ff;
  box-shadow: 0 0 0 3px rgba(47, 92, 245, 0.08);
}
.request-top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
}
.request-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-title);
}
.request-status {
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 11px;
  border: 1px solid transparent;
}
.request-status.strength-strong {
  color: #0f7d4d;
  background: #eaf8f1;
  border-color: #c8efd9;
}
.request-status.strength-medium {
  color: #bc7710;
  background: #fff7ea;
  border-color: #ffe1bb;
}
.request-status.strength-weak {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.request-text {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-text-body);
}
.request-meta {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--color-text-sub);
}
.materials-head {
  margin-top: 16px;
}
.material-list {
  border: 1px solid var(--color-divider);
  border-radius: 10px;
  overflow: hidden;
}
.material-item.active {
  background: #f5f8ff;
}
.material-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.material-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-title);
}
.material-meta {
  margin-top: 6px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--color-text-sub);
}

.dialog-overlay {
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
