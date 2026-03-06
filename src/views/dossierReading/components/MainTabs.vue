<template>
  <div class="middle-panel">
    <div class="panel-header">
      <span>证据研判台</span>
      <span class="wb-badge wb-badge-info">{{ currentFocus.request }}</span>
    </div>
    <div class="panel-content">
      <div class="wb-card top-summary">
        <h3 class="text-title summary-title">{{ currentFocus.title }}</h3>
        <p class="summary-text">{{ caseInfo.summary }}</p>
        <div class="summary-meta">
          <span>案号：{{ caseInfo.caseNo }}</span>
          <span>案由：{{ caseInfo.caseReason }}</span>
          <span>程序：{{ caseInfo.status }}</span>
          <span>标的：{{ caseInfo.amount }}</span>
        </div>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">
          <h3 class="text-title section-title">待补核验</h3>
          <span class="wb-badge wb-badge-warning">{{ currentFocus.pendingChecks.length }} 项</span>
        </div>
        <ul class="check-list">
          <li v-for="(item, idx) in currentFocus.pendingChecks" :key="idx">{{ item }}</li>
        </ul>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">
          <h3 class="text-title section-title">证据链对账</h3>
          <span class="wb-badge" :class="riskClass(currentFocus.riskLevel)">
            {{ riskText(currentFocus.riskLevel) }}
          </span>
        </div>
        <div
          v-for="ev in currentFocus.evidenceSnippets"
          :key="ev.id"
          class="evidence-row"
          :class="{ active: selectedEvidenceId === ev.id }"
        >
          <div class="evidence-head">
            <div>
              <div class="evidence-title">{{ ev.title }}</div>
              <div class="evidence-sub">{{ ev.material }} · {{ ev.position }}</div>
            </div>
            <div class="evidence-tags">
              <span class="wb-badge" :class="stanceClass(ev.stance)">{{ stanceText(ev.stance) }}</span>
              <span class="wb-badge" :class="confidenceClass(ev.confidence)">{{ confidenceText(ev.confidence) }}</span>
            </div>
          </div>
          <div class="evidence-content">{{ ev.content }}</div>
          <button type="button" class="wb-btn locate-btn" @click="openTraceDialog(ev.id)">
            回溯原文
          </button>
        </div>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">
          <h3 class="text-title section-title">法条建议与命中依据</h3>
        </div>
        <div v-for="law in currentFocus.lawSuggestions" :key="law.id" class="law-row">
          <div class="law-name">{{ law.lawName }}</div>
          <div class="law-rule">{{ law.hitRule }}</div>
          <span class="wb-badge" :class="confidenceClass(law.applicability)">{{ confidenceText(law.applicability) }}</span>
        </div>
      </div>

    </div>
    <div v-if="showTraceDialog" class="dialog-overlay" @click.self="closeTraceDialog">
      <div class="wb-card trace-dialog">
        <div class="trace-dialog-header">
          <h3 class="text-title trace-dialog-title">证据回溯原文</h3>
          <button type="button" class="wb-btn" @click="closeTraceDialog">关闭</button>
        </div>
        <div class="trace-dialog-sub">
          当前请求事项：{{ currentFocus.request }}，共 {{ relatedEvidenceList.length }} 条相关证据
        </div>
        <div class="trace-list">
          <div
            v-for="item in relatedEvidenceList"
            :key="item.id"
            class="trace-row"
            :class="{ active: selectedEvidenceId === item.id }"
          >
            <div class="trace-head">
              <div>
                <div class="trace-title">{{ item.title }}</div>
                <div class="trace-meta">{{ item.material }} · {{ item.position }}</div>
              </div>
              <div class="evidence-tags">
                <span class="wb-badge" :class="stanceClass(item.stance)">{{ stanceText(item.stance) }}</span>
                <span class="wb-badge" :class="confidenceClass(item.confidence)">{{ confidenceText(item.confidence) }}</span>
              </div>
            </div>
            <div class="trace-section-label">证据摘录</div>
            <div class="trace-content">{{ item.content }}</div>
            <div class="trace-section-label">证据原文</div>
            <div class="trace-content raw">{{ item.anchorText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import type { CaseInfo, FocusWorkbench, OriginalAnchorText } from '../config';

const props = defineProps<{
  caseInfo: CaseInfo;
  currentFocus: FocusWorkbench;
  originalAnchors: OriginalAnchorText[];
}>();
const { caseInfo, currentFocus, originalAnchors } = toRefs(props);

const showTraceDialog = ref(false);
const selectedEvidenceId = ref('');

const relatedEvidenceList = computed(() =>
  currentFocus.value.evidenceSnippets.map((item) => {
    const anchor = originalAnchors.value.find((row) => row.id === item.anchorId);
    return {
      ...item,
      anchorText: anchor?.content || '暂无对应原文'
    };
  })
);

const openTraceDialog = (evidenceId: string) => {
  selectedEvidenceId.value = evidenceId;
  showTraceDialog.value = true;
};

const closeTraceDialog = () => {
  showTraceDialog.value = false;
};

const stanceClass = (value: 'support' | 'weaken' | 'neutral') => {
  if (value === 'support') {
    return 'wb-badge-success';
  }
  if (value === 'weaken') {
    return 'wb-badge-danger';
  }
  return 'wb-badge-info';
};

const confidenceClass = (value: 'high' | 'medium' | 'low') => {
  if (value === 'high') {
    return 'wb-badge-success';
  }
  if (value === 'medium') {
    return 'wb-badge-warning';
  }
  return 'wb-badge-danger';
};

const riskClass = (value: 'high' | 'medium' | 'low') => {
  if (value === 'low') {
    return 'wb-badge-success';
  }
  if (value === 'medium') {
    return 'wb-badge-warning';
  }
  return 'wb-badge-danger';
};

const stanceText = (value: 'support' | 'weaken' | 'neutral') => {
  if (value === 'support') {
    return '支持';
  }
  if (value === 'weaken') {
    return '削弱';
  }
  return '中立';
};

const confidenceText = (value: 'high' | 'medium' | 'low') => {
  if (value === 'high') {
    return '高可信';
  }
  if (value === 'medium') {
    return '中可信';
  }
  return '低可信';
};

const riskText = (value: 'high' | 'medium' | 'low') => {
  if (value === 'low') {
    return '低风险';
  }
  if (value === 'medium') {
    return '中风险';
  }
  return '高风险';
};
</script>

<style scoped>
.top-summary {
  padding: 16px;
  margin-bottom: 16px;
}
.summary-title {
  margin: 0;
  font-size: 18px;
}
.summary-text {
  margin: 10px 0 0;
  color: var(--color-text-body);
  line-height: 1.6;
  font-size: 13px;
}
.summary-meta {
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--color-text-sub);
  font-size: 12px;
}
.section-card {
  padding: 16px;
  margin-bottom: 16px;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.section-title {
  margin: 0;
  font-size: 15px;
}
.check-list {
  margin: 0;
  padding-left: 20px;
}
.check-list li {
  margin-bottom: 8px;
  color: #7a5312;
}
.evidence-row {
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 10px;
}
.evidence-row.active {
  border-color: #8eaef3;
  box-shadow: 0 0 0 3px rgba(47, 92, 245, 0.1);
}
.evidence-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.evidence-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-title);
}
.evidence-sub {
  margin-top: 4px;
  color: var(--color-text-sub);
  font-size: 12px;
}
.evidence-tags {
  display: flex;
  gap: 6px;
}
.evidence-content {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.6;
}
.locate-btn {
  margin-top: 10px;
}
.law-row {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
}
.law-name {
  font-weight: 600;
  font-size: 13px;
}
.law-rule {
  margin: 6px 0;
  font-size: 13px;
  color: var(--color-text-body);
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
.trace-dialog {
  width: 880px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 60px);
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.trace-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.trace-dialog-title {
  margin: 0;
}
.trace-dialog-sub {
  font-size: 12px;
  color: var(--color-text-sub);
}
.trace-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 2px;
}
.trace-row {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 12px;
  background: #fff;
}
.trace-row.active {
  border-color: #8eaef3;
  box-shadow: 0 0 0 3px rgba(47, 92, 245, 0.08);
}
.trace-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.trace-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-title);
}
.trace-meta {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.trace-section-label {
  margin-top: 8px;
  margin-bottom: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.trace-content {
  line-height: 1.6;
  font-size: 13px;
  color: var(--color-text-body);
}
.trace-content.raw {
  padding: 8px 10px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px dashed #dbe3f7;
}
</style>
