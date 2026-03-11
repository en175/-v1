<template>
  <div class="right-panel">
    <div class="panel-header panel-header-themed">抗辩对照</div>
    <div class="panel-content">
      <div class="defense-summary">
        <div class="summary-item">
          <div class="summary-label">当前请求</div>
          <div class="summary-value">{{ currentRequest.title }}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">抗辩数量</div>
          <div class="summary-value">{{ currentRequest.defenses.length }} 条</div>
        </div>
      </div>

      <div v-if="groupedDefenses.length" class="defense-groups">
        <section v-for="group in groupedDefenses" :key="group.id" class="defense-group">
          <div class="group-head">
            <div>
              <div class="group-title">{{ group.title }}</div>
              <div class="group-sub">对应要件：{{ group.elementTitle }}</div>
            </div>
            <span class="group-count">{{ group.items.length }} 条抗辩</span>
          </div>

          <div v-for="item in group.items" :key="item.id" class="defense-card" :class="item.hitLevel">
            <div class="defense-card-head">
              <span class="defense-type">{{ defenseTypeText(item.type) }}</span>
              <span class="defense-level" :class="item.hitLevel">{{ hitLevelText(item.hitLevel) }}</span>
            </div>
            <div class="defense-target">反驳对象：{{ item.targetName }}</div>
            <div class="defense-point">抗辩要点：{{ item.point }}</div>
            <div class="defense-content">{{ item.content }}</div>
            <div class="defense-source">来源：{{ item.source }}</div>
          </div>
        </section>
      </div>

      <div v-else class="empty-defense">
        当前请求暂无被申请人明确抗辩，可先围绕请求要件和证据链完成事实归集。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RequestWorkbench } from '../config';

const props = defineProps<{
  currentRequest: RequestWorkbench;
}>();

const groupedDefenses = computed(() =>
  props.currentRequest.elements
    .map((element) => ({
      id: element.id,
      title: element.title,
      elementTitle: element.title,
      items: props.currentRequest.defenses.filter((item) => item.targetElementId === element.id)
    }))
    .filter((item) => item.items.length)
);

const defenseTypeText = (value: 'request' | 'fact' | 'evidence') => {
  if (value === 'request') return '针对请求';
  if (value === 'fact') return '针对事实';
  return '针对证据';
};

const hitLevelText = (value: 'high' | 'medium' | 'low') => {
  if (value === 'high') return '击中关键要件';
  if (value === 'medium') return '需要重点复核';
  return '一般抗辩';
};
</script>

<style scoped>
.defense-summary {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}
.summary-item {
  border: 1px solid #dbe4f5;
  border-radius: 10px;
  background: #fff;
  padding: 10px 12px;
}
.summary-label {
  font-size: 12px;
  color: var(--color-text-sub);
}
.summary-value {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.6;
  font-weight: 700;
  color: var(--color-text-title);
}
.defense-groups {
  display: grid;
  gap: 14px;
}
.defense-group {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #fff;
  padding: 12px;
}
.group-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}
.group-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-title);
}
.group-sub {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.group-count {
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 11px;
  color: #bc7710;
  background: #fff7ea;
  border: 1px solid #ffe1bb;
}
.defense-card {
  border: 1px solid #f0d5d5;
  border-radius: 10px;
  padding: 12px;
  background: #fff9f9;
  margin-bottom: 10px;
}
.defense-card:last-child {
  margin-bottom: 0;
}
.defense-card.high {
  border-left: 4px solid #ef4444;
}
.defense-card.medium {
  border-left: 4px solid #f59e0b;
}
.defense-card.low {
  border-left: 4px solid #3b82f6;
}
.defense-card-head {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
}
.defense-type {
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 11px;
  color: #9a6700;
  background: #fff1c7;
}
.defense-level {
  font-size: 11px;
}
.defense-level.high {
  color: #c93f3f;
}
.defense-level.medium {
  color: #bc7710;
}
.defense-level.low {
  color: #2f5cf5;
}
.defense-target,
.defense-point,
.defense-content,
.defense-source {
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.defense-target {
  font-weight: 600;
  color: var(--color-text-title);
}
.defense-source {
  color: var(--color-text-sub);
}
.empty-defense {
  border: 1px dashed #dbe4f5;
  border-radius: 12px;
  padding: 18px 16px;
  background: #fafcff;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-sub);
}
</style>
