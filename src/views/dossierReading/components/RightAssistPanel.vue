<template>
  <div class="right-panel">
    <div class="panel-header">裁决结论台</div>
    <div class="panel-content">
      <div class="wb-card section-card">
        <h3 class="text-title section-title">风险预警</h3>
        <div v-for="alert in alerts" :key="alert.id" class="alert-item">
          <div class="alert-head">
            <span class="wb-badge" :class="alertClass(alert.type)">{{ alertTypeText(alert.type) }}</span>
            <span class="alert-title">{{ alert.title }}</span>
          </div>
          <div class="alert-tip">{{ alert.suggestion }}</div>
        </div>
      </div>

      <div class="wb-card section-card">
        <h3 class="text-title section-title">AI分析要点摘要</h3>
        <div v-for="item in conclusions" :key="item.id" class="conclusion-item">
          <div class="conclusion-head">
            <span class="conclusion-title">{{ item.title }}</span>
            <span class="wb-badge" :class="confidenceClass(item.confidence)">
              {{ confidenceText(item.confidence) }}
            </span>
          </div>
          <p class="conclusion-content">{{ item.content }}</p>
          <div class="ref-list">
            <span v-for="(ref, idx) in item.references" :key="idx" class="wb-chip">{{ ref }}</span>
          </div>
          <div class="action-row">
            <button type="button" class="wb-btn" @click="$emit('update-status', item.id, 'pending')">待确认</button>
            <button type="button" class="wb-btn wb-btn-primary" @click="$emit('update-status', item.id, 'accepted')">采纳</button>
            <button type="button" class="wb-btn" @click="$emit('update-status', item.id, 'rejected')">驳回</button>
          </div>
          <div class="status-row">
            当前状态：
            <span :class="statusClass(item.status)">{{ statusText(item.status) }}</span>
          </div>
        </div>
      </div>

      <div class="wb-card section-card">
        <h3 class="text-title section-title">提交前对账</h3>
        <div v-for="item in traceQueue" :key="item.id" class="trace-row">
          <span>{{ item.label }}</span>
          <span class="wb-badge" :class="traceClass(item.level)">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ConclusionDraft, RiskAlert } from '../config';

defineProps<{
  alerts: RiskAlert[];
  conclusions: ConclusionDraft[];
  traceQueue: Array<{ id: string; label: string; value: string; level: string }>;
}>();

defineEmits<{
  (e: 'update-status', id: string, status: 'pending' | 'accepted' | 'rejected'): void;
}>();

const alertClass = (value: RiskAlert['type']) => {
  if (value === 'procedure') {
    return 'wb-badge-warning';
  }
  if (value === 'evidence') {
    return 'wb-badge-danger';
  }
  return 'wb-badge-info';
};

const confidenceClass = (value: ConclusionDraft['confidence']) => {
  if (value === 'high') {
    return 'wb-badge-success';
  }
  if (value === 'medium') {
    return 'wb-badge-warning';
  }
  return 'wb-badge-danger';
};

const statusClass = (value: ConclusionDraft['status']) => {
  if (value === 'accepted') {
    return 'status-ok';
  }
  if (value === 'rejected') {
    return 'status-bad';
  }
  return 'status-pending';
};

const traceClass = (value: string) => {
  if (value === 'good') {
    return 'wb-badge-success';
  }
  if (value === 'warning') {
    return 'wb-badge-warning';
  }
  return 'wb-badge-danger';
};

const alertTypeText = (value: RiskAlert['type']) => {
  if (value === 'procedure') {
    return '程序';
  }
  if (value === 'evidence') {
    return '证据';
  }
  return '逻辑';
};

const confidenceText = (value: ConclusionDraft['confidence']) => {
  if (value === 'high') {
    return '高可信';
  }
  if (value === 'medium') {
    return '中可信';
  }
  return '低可信';
};

const statusText = (value: ConclusionDraft['status']) => {
  if (value === 'accepted') {
    return '已采纳';
  }
  if (value === 'rejected') {
    return '已驳回';
  }
  return '待确认';
};
</script>

<style scoped>
.section-card {
  padding: 14px;
  margin-bottom: 14px;
}
.section-title {
  margin: 0 0 10px;
  font-size: 15px;
}
.alert-item {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
}
.alert-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.alert-title {
  font-size: 13px;
  font-weight: 600;
}
.alert-tip {
  margin-top: 6px;
  color: var(--color-text-body);
  font-size: 13px;
  line-height: 1.6;
}
.conclusion-item {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
}
.conclusion-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.conclusion-title {
  font-size: 13px;
  font-weight: 600;
}
.conclusion-content {
  margin: 8px 0;
  font-size: 13px;
  line-height: 1.6;
}
.ref-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.action-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 10px;
}
.action-row .wb-btn {
  min-height: 30px;
  padding: 4px 6px;
  font-size: 12px;
}
.status-row {
  margin-top: 8px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.status-ok {
  color: #1f9d66;
}
.status-bad {
  color: #d94848;
}
.status-pending {
  color: #c57b17;
}
.trace-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed var(--color-divider);
  padding: 8px 0;
  font-size: 13px;
}
.trace-row:last-child {
  border-bottom: none;
}
</style>
