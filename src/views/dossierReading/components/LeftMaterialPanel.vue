<template>
  <div class="left-panel">
    <div class="panel-header">请求事项与卷宗</div>
    <div class="panel-content">
      <div class="section-title">请求事项</div>
      <div class="focus-list">
        <button
          v-for="focus in focusNodes"
          :key="focus.id"
          type="button"
          class="focus-item"
          :class="{ active: selectedFocusId === focus.id }"
          @click="$emit('select-focus', focus.id)"
        >
          <div class="focus-title-row">
            <span class="focus-title">{{ focus.title }}</span>
            <span class="status-dot" :class="focus.status"></span>
          </div>
          <div class="focus-request">{{ focus.request }}</div>
          <div class="focus-meta">
            <span>覆盖率 {{ focus.evidenceCoverage }}</span>
            <span>冲突 {{ focus.conflictCount }}</span>
          </div>
        </button>
      </div>

      <div class="section-title">卷宗材料</div>
      <ul class="wb-list material-list">
        <li
          v-for="item in materials"
          :key="item.id"
          class="wb-list-item material-item"
          :class="{ active: selectedMaterialId === item.id }"
          @click="$emit('select-material', item.id)"
        >
          <div class="material-top">
            <div class="material-title">{{ item.title }}</div>
            <span class="wb-badge" :class="reliabilityClass(item.reliability)">
              {{ reliabilityText(item.reliability) }}
            </span>
          </div>
          <div class="material-meta">
            <span>{{ item.source }}</span>
            <span>{{ item.updatedAt }}</span>
            <span>{{ item.pageCount }}页</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FocusNode, MaterialItem } from '../config';

defineProps<{
  materials: MaterialItem[];
  focusNodes: FocusNode[];
  selectedFocusId: string;
  selectedMaterialId: string;
}>();

defineEmits<{
  (e: 'select-focus', focusId: string): void;
  (e: 'select-material', materialId: string): void;
}>();

const reliabilityClass = (value: MaterialItem['reliability']) => {
  if (value === 'high') {
    return 'wb-badge-success';
  }
  if (value === 'medium') {
    return 'wb-badge-warning';
  }
  return 'wb-badge-danger';
};

const reliabilityText = (value: MaterialItem['reliability']) => {
  if (value === 'high') {
    return '高可信';
  }
  if (value === 'medium') {
    return '中可信';
  }
  return '待核验';
};
</script>

<style scoped>
.section-title {
  font-size: 12px;
  color: var(--color-text-sub);
  margin-bottom: 8px;
}
.focus-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.focus-item {
  border: 1px solid var(--color-border);
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
}
.focus-item.active {
  border-color: #9eb8f8;
  background: #f5f8ff;
}
.focus-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.focus-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-title);
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}
.status-dot.clear {
  background: #23b26d;
}
.status-dot.partial {
  background: #f59e0b;
}
.status-dot.risk {
  background: #ef4444;
}
.focus-request {
  margin-top: 6px;
  font-size: 12px;
  color: var(--color-text-body);
}
.focus-meta {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  color: var(--color-text-sub);
  font-size: 12px;
}
.material-list {
  border: 1px solid var(--color-divider);
  border-radius: 10px;
  overflow: hidden;
}
.material-item.active {
  background: #f5f8ff;
}
.material-top {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
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
  font-size: 12px;
  color: var(--color-text-sub);
  flex-wrap: wrap;
}
</style>
