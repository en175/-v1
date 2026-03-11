<template>
  <div class="left-panel">
    <div class="panel-header">证据/材料引用</div>
    <div class="panel-content evidence-panel">
      <ul class="wb-list material-list">
        <li
          v-for="item in materials"
          :key="item.id"
          class="wb-list-item material-item"
          :class="{ active: item.id === selectedMaterialId }"
          @click="selectedMaterialId = item.id"
        >
          <div class="material-head">
            <div class="material-title">{{ item.title }}</div>
            <span class="material-date">{{ item.submittedAt }}</span>
          </div>
          <div class="material-meta">{{ item.source }}</div>
        </li>
      </ul>

      <div v-if="activeMaterial" class="active-box">
        <div class="active-title">当前材料：{{ activeMaterial.title }}</div>
        <div
          v-for="row in activeMaterial.evidenceItems"
          :key="row.id"
          class="evidence-card"
          :class="riskClass(row.conflictLevel)"
        >
          <div class="evidence-head">
            <span class="evidence-claim">{{ row.claim }}</span>
            <span class="evidence-tag" :class="riskClass(row.conflictLevel)">{{ riskText(row.conflictLevel) }}</span>
          </div>
          <div class="evidence-excerpt">{{ row.excerpt }}</div>
          <div v-if="row.conflictNote" class="evidence-note">冲突提示：{{ row.conflictNote }}</div>
          <div class="action-row">
            <button class="wb-btn wb-btn-primary" @click.stop="emit('quote-evidence', { material: activeMaterial, evidence: row })">
              引用到文书
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface EvidenceItem {
  id: string;
  claim: string;
  excerpt: string;
  compliance: 'ok' | 'warning';
  conflictLevel: 'none' | 'medium' | 'high';
  conflictNote: string;
}

interface MaterialItem {
  id: string;
  title: string;
  type: string;
  source: string;
  submittedAt: string;
  evidenceItems: EvidenceItem[];
}

const props = defineProps<{
  materials: MaterialItem[];
}>();

const emit = defineEmits<{
  (
    event: 'quote-evidence',
    payload: { material: MaterialItem; evidence: EvidenceItem }
  ): void;
}>();

const selectedMaterialId = ref(props.materials[0]?.id || '');

const activeMaterial = computed(
  () => props.materials.find((item) => item.id === selectedMaterialId.value) || props.materials[0]
);

const riskClass = (value: EvidenceItem['conflictLevel']) => {
  if (value === 'high') {
    return 'danger';
  }
  if (value === 'medium') {
    return 'warning';
  }
  return 'safe';
};

const riskText = (value: EvidenceItem['conflictLevel']) => {
  if (value === 'high') {
    return '高风险';
  }
  if (value === 'medium') {
    return '需复核';
  }
  return '通过';
};
</script>

<style scoped>
.evidence-panel {
  padding: 12px;
}
.material-list {
  border: 1px solid var(--color-divider);
  border-radius: 10px;
  overflow: hidden;
}
.material-item {
  cursor: pointer;
}
.material-item.active {
  background: #f3f7ff;
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
.material-date {
  font-size: 12px;
  color: var(--color-text-sub);
}
.material-meta {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.active-box {
  margin-top: 12px;
}
.active-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}
.evidence-card {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 8px;
}
.evidence-card.warning {
  border-color: #f8d8a9;
}
.evidence-card.danger {
  border-color: #f6b5b5;
}
.evidence-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.evidence-claim {
  font-size: 13px;
  font-weight: 600;
}
.evidence-tag {
  font-size: 12px;
  border-radius: 999px;
  padding: 2px 8px;
  border: 1px solid transparent;
}
.evidence-tag.safe {
  color: #0f766e;
  background: #ecfeff;
  border-color: #a5f3fc;
}
.evidence-tag.warning {
  color: #b45309;
  background: #fffbeb;
  border-color: #fde68a;
}
.evidence-tag.danger {
  color: #b91c1c;
  background: #fef2f2;
  border-color: #fecaca;
}
.evidence-excerpt {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.6;
}
.evidence-note {
  margin-top: 6px;
  font-size: 12px;
  color: #b45309;
}
.action-row {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 8px;
  margin-top: 10px;
}
.action-row .wb-btn {
  padding-left: 0;
  padding-right: 0;
}
</style>
