<template>
  <div class="middle-panel">
    <div class="panel-header panel-header-themed">
      <span>智能阅卷</span>
      <span class="header-request">{{ currentRequest.requestStatement }}</span>
    </div>
    <div class="panel-content">
      <section class="summary-section">
        <div class="summary-grid">
          <div
            v-for="item in caseSummary"
            :key="item.label"
            class="summary-item"
            :class="{ full: item.span === 'full' }"
          >
            <div class="summary-label">{{ item.label }}</div>
            <div class="summary-value">{{ item.value }}</div>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <div class="section-head">
          <h3 class="section-title">案件时间轴</h3>
          <span class="section-tip">横向浏览关键节点，点击后联动到对应请求要件和事实</span>
        </div>
        <div class="timeline-row">
          <button
            v-for="item in relatedTimeline"
            :key="item.id"
            type="button"
            class="timeline-item"
            :class="{ active: activeTimelineId === item.id }"
            @click="$emit('select-timeline', item.id)"
          >
            <div class="timeline-date">{{ item.date }}</div>
            <div class="timeline-title">{{ item.title }}</div>
            <div class="timeline-detail">{{ item.detail }}</div>
            <div class="timeline-tags">
              <span v-for="tag in item.tags" :key="tag" class="timeline-tag" :class="tag">{{ timelineTagText(tag) }}</span>
            </div>
          </button>
        </div>
      </section>

      <section class="request-section">
        <div class="section-head">
          <div>
            <h3 class="section-title">{{ currentRequest.title }}</h3>
            <div class="section-tip">{{ currentRequest.reviewHint }}</div>
          </div>
        </div>

        <div
          v-for="(element, elementIndex) in currentRequest.elements"
          :key="element.id"
          :id="`element-${element.id}`"
          class="element-block"
          :class="element.status"
        >
          <div class="element-head">
            <div>
              <div class="element-title">请求要件{{ elementIndex + 1 }}：{{ element.title }}</div>
              <div class="element-desc">{{ element.description }}</div>
            </div>
            <span class="element-status" :class="element.status">{{ elementStatusText(element.status) }}</span>
          </div>

          <div class="element-content-grid">
            <div class="facts-column">
              <div class="column-role-head applicant">
                <span class="role-badge">申请方</span>
                <span class="role-text">主张 / 事实证据</span>
              </div>
              <div
                v-for="fact in element.facts"
                :key="fact.id"
                :id="`fact-${fact.id}`"
                class="fact-card"
                :class="{ active: activeTimelineFactMap.includes(fact.id) }"
              >
                <div class="fact-head">
                  <div>
                    <div class="fact-title">{{ fact.title }}</div>
                    <div class="fact-meta">发生时间：{{ fact.eventDate }}</div>
                  </div>
                  <span class="fact-strength" :class="fact.evidenceStrength">{{ strengthText(fact.evidenceStrength) }}</span>
                </div>
                <div class="fact-content">{{ fact.content }}</div>

                <div class="evidence-list">
                  <div v-for="evidence in visibleEvidences(fact.evidences)" :key="evidence.id" class="evidence-card">
                    <div class="evidence-card-head">
                      <div>
                        <div class="evidence-title">{{ evidence.title }}</div>
                        <div class="evidence-meta">{{ evidence.source }} · {{ evidence.position }}</div>
                      </div>
                      <span class="evidence-strength" :class="evidence.strength">{{ strengthText(evidence.strength) }}</span>
                    </div>
                    <div class="evidence-point">证明方向：{{ evidence.provingPoint }}</div>
                    <div class="evidence-summary">{{ evidence.summary }}</div>
                    <button type="button" class="wb-btn evidence-btn" @click="openEvidence(evidence.id)">查看原文</button>
                  </div>
                  <div v-if="fact.evidences.length > 3" class="more-evidence-tip">
                    其余 {{ fact.evidences.length - 3 }} 条证据在展开后查看
                  </div>
                </div>
              </div>
            </div>

            <div class="defense-column">
              <div class="column-role-head respondent">
                <span class="role-badge">被申请方</span>
                <span class="role-text">抗辩 / 反驳依据</span>
                <span class="defense-count">{{ elementDefenses(element.id).length }} 条</span>
              </div>
              <div v-if="elementDefenses(element.id).length" class="defense-list">
                <div v-for="defense in elementDefenses(element.id)" :key="defense.id" class="defense-card" :class="defense.hitLevel">
                  <div class="defense-card-head">
                    <span class="defense-type">{{ defenseTypeText(defense.type) }}</span>
                    <span class="defense-level" :class="defense.hitLevel">{{ hitLevelText(defense.hitLevel) }}</span>
                  </div>
                  <div class="defense-target">反驳对象：{{ defense.targetName }}</div>
                  <div class="defense-point-text">抗辩要点：{{ defense.point }}</div>
                  <div class="defense-content">{{ defense.content }}</div>
                  <div class="defense-evidence-label">证据原文</div>
                  <div class="defense-evidence-quote">{{ defense.evidenceExcerpt }}</div>
                  <div class="defense-source">来源：{{ defense.source }}</div>
                </div>
              </div>
              <div v-else class="empty-defense">
                当前要件下暂无明确抗辩，可先根据事实和证据完成申请人主张链梳理。
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-if="showTraceDialog && selectedEvidence" class="dialog-overlay" @click.self="closeTraceDialog">
      <div class="trace-dialog">
        <div class="trace-dialog-header">
          <div>
            <div class="trace-dialog-title">{{ selectedEvidence.title }}</div>
            <div class="trace-dialog-sub">{{ selectedEvidence.source }} · {{ selectedEvidence.position }}</div>
          </div>
          <button type="button" class="wb-btn" @click="closeTraceDialog">关闭</button>
        </div>
        <div class="trace-section">
          <div class="trace-section-label">证明方向</div>
          <div class="trace-section-content">{{ selectedEvidence.provingPoint }}</div>
        </div>
        <div class="trace-section">
          <div class="trace-section-label">证据摘要</div>
          <div class="trace-section-content">{{ selectedEvidence.summary }}</div>
        </div>
        <div class="trace-section">
          <div class="trace-section-label">证据原文</div>
          <div class="trace-section-content raw">{{ selectedEvidenceAnchor }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { CaseSummaryItem, OriginalAnchorText, RequestWorkbench, TimelineItem } from '../config';

const props = defineProps<{
  caseSummary: CaseSummaryItem[];
  timeline: TimelineItem[];
  currentRequest: RequestWorkbench;
  activeTimelineId: string;
  originalAnchors: OriginalAnchorText[];
}>();

defineEmits<{
  (e: 'select-timeline', timelineId: string): void;
}>();

const showTraceDialog = ref(false);
const selectedEvidenceId = ref('');

const relatedTimeline = computed(() => props.timeline.filter((item) => item.requestIds.includes(props.currentRequest.id)));

const activeTimelineFactMap = computed(() => {
  if (!props.activeTimelineId) return [];
  const currentTimeline = props.timeline.find((item) => item.id === props.activeTimelineId);
  if (!currentTimeline || !currentTimeline.requestIds.includes(props.currentRequest.id)) return [];
  return currentTimeline.targetFactIds;
});

const selectedEvidence = computed(() =>
  props.currentRequest.elements
    .flatMap((element) => element.facts)
    .flatMap((fact) => fact.evidences)
    .find((item) => item.id === selectedEvidenceId.value)
);

const selectedEvidenceAnchor = computed(() => {
  const evidence = selectedEvidence.value;
  if (!evidence) return '';
  return props.originalAnchors.find((item) => item.id === evidence.anchorId)?.content || '暂无对应原文';
});

const visibleEvidences = <T>(evidences: T[]) => evidences.slice(0, 3);

const elementDefenses = (elementId: string) => props.currentRequest.defenses.filter((item) => item.targetElementId === elementId);

const openEvidence = (evidenceId: string) => {
  selectedEvidenceId.value = evidenceId;
  showTraceDialog.value = true;
};

const closeTraceDialog = () => {
  showTraceDialog.value = false;
};

const timelineTagText = (tag: TimelineItem['tags'][number]) => {
  if (tag === 'coreFact') return '核心事实';
  if (tag === 'defenseHit') return '存在抗辩';
  return '证据待补强';
};

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

const strengthText = (value: 'strong' | 'medium' | 'weak') => {
  if (value === 'strong') return '证据充分';
  if (value === 'medium') return '证据一般';
  return '证据薄弱';
};

const elementStatusText = (value: RequestWorkbench['elements'][number]['status']) => {
  if (value === 'supported') return '已支撑';
  if (value === 'contested') return '被抗辩';
  return '待补强';
};

watch(
  () => props.activeTimelineId,
  (timelineId) => {
    if (!timelineId) return;
    const timeline = props.timeline.find((item) => item.id === timelineId);
    const targetFactId = timeline?.targetFactIds.find((id) =>
      props.currentRequest.elements.some((element) => element.facts.some((fact) => fact.id === id))
    );
    const targetElementId = timeline?.targetElementIds.find((id) =>
      props.currentRequest.elements.some((element) => element.id === id)
    );
    const nodeId = targetFactId ? `fact-${targetFactId}` : targetElementId ? `element-${targetElementId}` : '';
    if (!nodeId) return;
    const el = document.getElementById(nodeId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
);
</script>

<style scoped>
.header-request {
  max-width: 58%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.86);
}
.summary-section,
.timeline-section,
.request-section {
  margin-bottom: 18px;
}
.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.summary-item {
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: #fff;
  padding: 12px;
}
.summary-item.full {
  grid-column: 1 / -1;
}
.summary-label {
  font-size: 12px;
  color: var(--color-text-sub);
}
.summary-value {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-text-title);
}
.section-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 10px;
}
.section-title {
  margin: 0;
  font-size: 15px;
  color: var(--color-text-title);
}
.section-tip {
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-text-sub);
}
.timeline-row {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-snap-type: x proximity;
}
.timeline-item {
  min-width: 260px;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #fff;
  padding: 12px;
  text-align: left;
  cursor: pointer;
  scroll-snap-align: start;
}
.timeline-item.active {
  border-color: #8eaef3;
  background: #f5f8ff;
  box-shadow: 0 0 0 3px rgba(47, 92, 245, 0.08);
}
.timeline-date {
  font-size: 12px;
  color: var(--color-text-sub);
}
.timeline-title {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-title);
  line-height: 1.5;
}
.timeline-detail {
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.timeline-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.timeline-tag {
  font-size: 11px;
  border-radius: 999px;
  padding: 2px 8px;
  border: 1px solid transparent;
}
.timeline-tag.coreFact {
  color: #1f4ad8;
  background: #edf3ff;
  border-color: #d4e2ff;
}
.timeline-tag.defenseHit {
  color: #bc7710;
  background: #fff7ea;
  border-color: #ffe1bb;
}
.timeline-tag.evidenceWeak {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.element-block {
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: #fff;
  padding: 14px;
  margin-bottom: 14px;
}
.element-block.supported {
  border-left: 4px solid #23b26d;
}
.element-block.contested {
  border-left: 4px solid #f59e0b;
}
.element-block.pending {
  border-left: 4px solid #ef4444;
}
.element-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}
.element-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-title);
}
.element-desc {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--color-text-sub);
}
.element-status {
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 11px;
  border: 1px solid transparent;
}
.element-status.supported {
  color: #0f7d4d;
  background: #eaf8f1;
  border-color: #c8efd9;
}
.element-status.contested {
  color: #bc7710;
  background: #fff7ea;
  border-color: #ffe1bb;
}
.element-status.pending {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.element-content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.9fr);
  gap: 16px;
  margin-top: 12px;
}
.facts-column,
.defense-column {
  min-width: 0;
}
.column-role-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid transparent;
}
.column-role-head.applicant {
  background: #f5f8ff;
  border-color: #d6e2fb;
}
.column-role-head.respondent {
  background: #fff6f6;
  border-color: #f3d6d6;
}
.column-role-head .defense-count {
  margin-left: auto;
  font-size: 11px;
  color: #bc7710;
  border: 1px solid #ffe1bb;
  background: #fff7ea;
  border-radius: 999px;
  padding: 2px 8px;
}
.role-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 58px;
  height: 24px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
}
.column-role-head.applicant .role-badge {
  background: #2f5cf5;
  color: #fff;
}
.column-role-head.respondent .role-badge {
  background: #ef4444;
  color: #fff;
}
.role-text {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-title);
}
.fact-card {
  border: 1px solid #dbe4f5;
  border-radius: 10px;
  background: #fbfdff;
  padding: 12px;
  margin-bottom: 12px;
}
.fact-card.active {
  border-color: #8eaef3;
  box-shadow: 0 0 0 3px rgba(47, 92, 245, 0.08);
}
.fact-head {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: flex-start;
}
.fact-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-title);
}
.fact-meta {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.fact-strength,
.evidence-strength {
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 11px;
  border: 1px solid transparent;
}
.fact-strength.strong,
.evidence-strength.strong {
  color: #0f7d4d;
  background: #eaf8f1;
  border-color: #c8efd9;
}
.fact-strength.medium,
.evidence-strength.medium {
  color: #bc7710;
  background: #fff7ea;
  border-color: #ffe1bb;
}
.fact-strength.weak,
.evidence-strength.weak {
  color: #c93f3f;
  background: #fff0f0;
  border-color: #ffd1d1;
}
.fact-content {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.evidence-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}
.evidence-card {
  border: 1px solid #dbe4f5;
  border-radius: 10px;
  background: #fafcff;
  padding: 12px;
}
.evidence-card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.evidence-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-title);
}
.evidence-meta {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.evidence-point,
.evidence-summary {
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.evidence-btn {
  margin-top: 10px;
}
.more-evidence-tip {
  font-size: 12px;
  color: var(--color-text-sub);
}
.defense-list {
  display: grid;
  gap: 10px;
}
.defense-card {
  border: 1px solid #f0d5d5;
  border-radius: 10px;
  padding: 12px;
  background: #fff9f9;
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
.defense-point-text,
.defense-content,
.defense-source {
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.defense-target {
  font-weight: 700;
  color: var(--color-text-title);
}
.defense-evidence-label {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text-title);
}
.defense-evidence-quote {
  margin-top: 6px;
  border: 1px solid #f3d6d6;
  border-radius: 8px;
  background: #fff;
  padding: 10px 12px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.defense-source {
  color: var(--color-text-sub);
}
.empty-defense {
  border: 1px dashed #f0d5d5;
  border-radius: 10px;
  padding: 16px 14px;
  background: #fffafa;
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-text-sub);
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
  width: 860px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  border-radius: 14px;
  background: #fff;
  padding: 18px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
}
.trace-dialog-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
}
.trace-dialog-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-title);
}
.trace-dialog-sub {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-sub);
}
.trace-section {
  margin-top: 14px;
}
.trace-section-label {
  font-size: 12px;
  color: var(--color-text-sub);
}
.trace-section-content {
  margin-top: 6px;
  border: 1px solid #dbe4f5;
  border-radius: 10px;
  background: #fafcff;
  padding: 12px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-body);
}
.trace-section-content.raw {
  background: #fff;
}
@media (max-width: 1200px) {
  .element-content-grid {
    grid-template-columns: 1fr;
  }
}
</style>
