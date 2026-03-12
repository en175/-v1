<template>
  <div class="three-column-layout">
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
