<template>
  <div class="three-column-layout doc-review-page">
    <LeftCasePanel
      :summary="summary"
      :materials="materials"
      :reviewModules="reviewModules"
      :moduleDialogs="moduleDialogs"
      :activeModuleKey="activeModuleKey"
      @select-module="handleSelectModule"
    />
    <DocEditor v-model="content" :sections="sections" />
    <RightAiAnalysis
      :results="analysisResults"
      :activeModuleKey="activeModuleKey"
      :moduleInsights="moduleInsights"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LeftCasePanel from './components/LeftCasePanel.vue';
import DocEditor from './components/DocEditor.vue';
import RightAiAnalysis from './components/RightAiAnalysis.vue';

import {
  mockCaseSummary,
  mockMaterials,
  mockAnalysisResults,
  mockReviewModules,
  mockModuleInsights,
  mockReviewModuleDialogs
} from './mock';
import { DOC_SECTIONS, MOCK_EDITOR_CONTENT } from '../docWriter/config';

const summary = mockCaseSummary;
const materials = mockMaterials;
const reviewModules = mockReviewModules;
const moduleDialogs = mockReviewModuleDialogs;
const moduleInsights = mockModuleInsights;
const analysisResults = mockAnalysisResults;
const activeModuleKey = ref(reviewModules[0]?.key || 'coreClaim');
const sections = DOC_SECTIONS;

const content = ref(MOCK_EDITOR_CONTENT);

const handleSelectModule = (module) => {
  activeModuleKey.value = module.key;
};
</script>

<style scoped>
.doc-review-page {
  background: linear-gradient(180deg, #f3f7ff 0%, #eef4ff 100%);
}
.doc-review-page :deep(.left-panel),
.doc-review-page :deep(.middle-panel),
.doc-review-page :deep(.right-panel) {
  border: 1px solid #cfdcf3;
  box-shadow: 0 10px 24px rgba(30, 58, 138, 0.08);
  background: #fff;
}
.doc-review-page :deep(.panel-header),
.doc-review-page :deep(.panel-header-themed) {
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 62%, #2563eb 100%);
  color: #fff;
  border-bottom: 1px solid rgba(191, 219, 254, 0.45);
}
.doc-review-page :deep(.panel-header .module-title),
.doc-review-page :deep(.panel-header span) {
  color: #fff;
}
.doc-review-page :deep(.panel-content) {
  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 130px);
}
.doc-review-page :deep(.wb-card) {
  border-color: #d8e4f8;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.08);
}
.doc-review-page :deep(.wb-btn) {
  border-color: #cad7f0;
}
.doc-review-page :deep(.wb-btn:hover) {
  border-color: #8eaef3;
  background: #eef4ff;
}
</style>
