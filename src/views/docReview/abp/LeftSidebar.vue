<template>
  <aside class="tw-w-[350px] tw-bg-white tw-p-6 tw-border-r tw-border-gray-200 tw-flex tw-flex-col tw-h-screen tw-bottom-0 tw-z-20">
    <!-- 页面标题 -->
    <div class="tw-flex tw-items-center tw-mb-2">
      <img src="/icon.png" alt="智能分案Logo" class="tw-h-8 tw-w-8 tw-mb-2" />
      <div class="tw-ml-2">
        <span class="tw-text-lg tw-font-[450]">裁决书审核</span>
        <p class="tw-text-xs tw-text-gray-500">（2026）京仲裁字第0321号</p>
      </div>
    </div>

    <!-- 导航内容 -->
    <nav class="tw-flex-1 tw-min-h-0 tw-overflow-y-auto">
      <!-- 案件概要 -->
      <CaseSummary />

      <!-- 案件材料 -->
      <CaseMaterials />

      <!-- 庭审记录 -->
      <HearingRecords />
    </nav>
  </aside>
</template>

<script setup>
import CaseSummary from './sidebar/CaseSummary.vue'
import CaseMaterials from './sidebar/CaseMaterials.vue'
import HearingRecords from './sidebar/HearingRecords.vue'
</script>
