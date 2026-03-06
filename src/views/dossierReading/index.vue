<template>
  <div class="dossier-page">
    <div class="wb-card top-dashboard">
      <div class="top-left">
        <div class="case-name text-title">{{ caseInfo.caseNo }} · 智能阅卷工作台</div>
        <div class="case-tags">
          <span class="wb-chip">{{ caseInfo.caseReason }}</span>
          <span class="wb-chip">申请人：{{ caseInfo.claimant }}</span>
          <span class="wb-chip">被申请人：{{ caseInfo.respondent }}</span>
          <span class="wb-chip">电子卷宗已同步</span>
        </div>
      </div>
      <div class="metrics-row">
        <div v-for="item in decisionMetrics" :key="item.id" class="metric-item">
          <div class="metric-label">{{ item.label }}</div>
          <div class="metric-value" :class="metricClass(item.level)">{{ item.value }}</div>
        </div>
      </div>
    </div>
    <div class="three-column-layout">
      <LeftMaterialPanel
        :materials="materials"
        :focusNodes="focusNodes"
        :selectedFocusId="selectedFocusId"
        :selectedMaterialId="selectedMaterialId"
        @select-focus="selectedFocusId = $event"
        @select-material="selectedMaterialId = $event"
      />
      <MainTabs
        :caseInfo="caseInfo"
        :currentFocus="currentFocus"
        :originalAnchors="originalAnchors"
      />
      <RightAssistPanel
        :alerts="riskAlerts"
        :conclusions="conclusionDrafts"
        :traceQueue="traceQueue"
        @update-status="updateConclusionStatus"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { FocusWorkbench } from './config';
import LeftMaterialPanel from './components/LeftMaterialPanel.vue';
import MainTabs from './components/MainTabs.vue';
import RightAssistPanel from './components/RightAssistPanel.vue';

import {
  mockCaseInfo,
  mockConclusionDrafts,
  mockDecisionMetrics,
  mockFocusNodes,
  mockMaterials,
  mockOriginalAnchors,
  mockRiskAlerts,
  mockTraceQueue,
  mockWorkbench
} from './mock';

const materials = reactive(mockMaterials);
const caseInfo = reactive(mockCaseInfo);
const focusNodes = reactive(mockFocusNodes);
const workbench = reactive(mockWorkbench);
const originalAnchors = reactive(mockOriginalAnchors);
const conclusionDrafts = reactive(mockConclusionDrafts);
const riskAlerts = reactive(mockRiskAlerts);
const traceQueue = reactive(mockTraceQueue);
const decisionMetrics = reactive(mockDecisionMetrics);

const selectedFocusId = ref(focusNodes[0]?.id || '');
const selectedMaterialId = ref(materials[0]?.id || '');

const currentFocus = computed<FocusWorkbench>(() => {
  const target = workbench.find((item) => item.id === selectedFocusId.value);
  return target || workbench[0]!;
});

const updateConclusionStatus = (id: string, status: 'pending' | 'accepted' | 'rejected') => {
  const item = conclusionDrafts.find((row) => row.id === id);
  if (item) {
    item.status = status;
  }
};

const metricClass = (value: string) => {
  if (value === 'good') {
    return 'good';
  }
  if (value === 'warning') {
    return 'warning';
  }
  return 'danger';
};
</script>

<style scoped>
.dossier-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--layout-gap);
  gap: var(--layout-gap);
  background: var(--color-background);
}
.top-dashboard {
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
}
.top-left {
  min-width: 0;
}
.case-name {
  font-size: 16px;
}
.case-tags {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.metrics-row {
  display: flex;
  gap: 10px;
}
.metric-item {
  min-width: 96px;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: #fff;
}
.metric-label {
  font-size: 12px;
  color: var(--color-text-sub);
}
.metric-value {
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
}
.metric-value.good {
  color: #1f9d66;
}
.metric-value.warning {
  color: #c57b17;
}
.metric-value.danger {
  color: #d94848;
}
.three-column-layout {
  padding: 0;
}
</style>
