<template>
  <div class="right-panel">
    <div class="panel-header">裁决审查与签发支持</div>
    <div class="panel-content">
      <div class="wb-card section-card">
        <div class="section-head">
          <span>审查要点建议</span>
        </div>
        <div class="summary-title">{{ activeInsight.title }}</div>
        <div class="summary-text">{{ activeInsight.summary }}</div>
        <ul class="tip-list">
          <li v-for="(tip, idx) in activeInsight.tips" :key="idx">{{ tip }}</li>
        </ul>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">裁决质量评估</div>
        <div
          v-for="(item, idx) in results"
          :key="idx"
          class="score-card"
        >
          <div class="score-head">
            <div class="score-label">
              <span class="score-icon" v-html="getIcon(item.metric)"></span>
              {{ getLabel(item.metric) }}
            </div>
            <div :style="{ color: item.score >= 90 ? 'var(--color-success)' : '#ff7d00', fontWeight: 'bold' }">
              {{ item.score }}分
            </div>
          </div>
          <div class="score-desc">{{ item.desc }}</div>
          <div v-if="item.detail" class="score-detail">{{ item.detail }}</div>
          <span class="wb-badge" :class="item.status === 'success' ? 'wb-badge-success' : 'wb-badge-warning'">
            {{ item.status === 'success' ? '符合' : '需关注' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ANALYSIS_METRICS } from '../config';

const props = defineProps({
  results: Array,
  activeModuleKey: String,
  moduleInsights: Object
});

const activeInsight = computed(() => props.moduleInsights?.[props.activeModuleKey] || {
  title: '审查要点建议',
  summary: '请选择左侧模块以查看建议。',
  tips: []
});

const getLabel = (key) => ANALYSIS_METRICS.find(m => m.key === key)?.label || key;
const getIcon = (key) => ANALYSIS_METRICS.find(m => m.key === key)?.icon || '';
</script>

<style scoped>
.section-card {
  padding: 14px;
  margin-bottom: 12px;
}
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
.summary-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}
.summary-text {
  font-size: 13px;
  color: var(--color-text-body);
  line-height: 1.6;
}
.tip-list {
  margin: 8px 0 0;
  padding-left: 18px;
}
.tip-list li {
  font-size: 12px;
  color: var(--color-text-sub);
  line-height: 1.8;
}
.score-card {
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  border-color: #e8edf8;
}
.score-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.score-label {
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.score-icon {
  font-size: 16px;
  display: flex;
}
.score-desc {
  font-size: 13px;
  color: var(--color-text-body);
  line-height: 1.5;
  margin-bottom: 6px;
}
.score-detail {
  font-size: 12px;
  color: #5a6b8f;
  line-height: 1.6;
  margin-bottom: 8px;
}
</style>
