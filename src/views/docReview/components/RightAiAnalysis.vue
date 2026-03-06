<template>
  <div class="right-panel">
    <div class="panel-header">智能分析与审签支持</div>
    <div class="panel-content">
      <div class="wb-card section-card">
        <div class="section-head">
          <span>模块审查建议</span>
          <button type="button" class="wb-btn wb-btn-text" @click="$emit('locate', activeModuleParagraphId)">定位正文</button>
        </div>
        <div class="summary-title">{{ activeInsight.title }}</div>
        <div class="summary-text">{{ activeInsight.summary }}</div>
        <ul class="tip-list">
          <li v-for="(tip, idx) in activeInsight.tips" :key="idx">{{ tip }}</li>
        </ul>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">智能分析评分</div>
        <div
          v-for="(item, idx) in results"
          :key="idx"
          class="score-card"
          @click="$emit('locate', item.metric)"
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
          <span class="wb-badge" :class="item.status === 'success' ? 'wb-badge-success' : 'wb-badge-warning'">
            {{ item.status === 'success' ? '符合' : '需关注' }}
          </span>
        </div>
      </div>

      <div class="wb-card section-card">
        <div class="section-head">审签辅助看板</div>
        <div class="tool-list">
          <div v-for="item in usefulTools" :key="item.id" class="tool-row">
            <span class="tool-name">{{ item.name }}</span>
            <span class="wb-badge" :class="toolClass(item.level)">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ANALYSIS_METRICS, REVIEW_MODULES } from '../config';

const props = defineProps({
  results: Array,
  activeModuleKey: String,
  moduleInsights: Object,
  usefulTools: Array
});

const activeInsight = computed(() => props.moduleInsights?.[props.activeModuleKey] || {
  title: '模块审查建议',
  summary: '请选择左侧模块以查看建议。',
  tips: []
});

const activeModuleParagraphId = computed(
  () => REVIEW_MODULES.find((item) => item.key === props.activeModuleKey)?.paragraphId || 'logic'
);

const getLabel = (key) => ANALYSIS_METRICS.find(m => m.key === key)?.label || key;
const getIcon = (key) => ANALYSIS_METRICS.find(m => m.key === key)?.icon || '';
const toolClass = (value) => {
  if (value === 'success') return 'wb-badge-success';
  if (value === 'warning') return 'wb-badge-warning';
  if (value === 'danger') return 'wb-badge-danger';
  return 'wb-badge-info';
};
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
  cursor: pointer;
  transition: all 0.2s;
}
.score-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-base);
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
  margin-bottom: 8px;
}
.tool-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tool-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}
.tool-name {
  font-size: 13px;
  color: var(--color-text-body);
}
</style>
