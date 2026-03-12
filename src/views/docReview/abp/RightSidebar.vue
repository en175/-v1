<template>
  <aside class="tw-w-[360px] tw-bg-white tw-p-6 tw-border-l tw-border-gray-200 tw-overflow-y-auto tw-h-screen">
    <div class="tw-flex tw-items-center tw-mb-6">
      <SparklesIcon class="tw-text-blue-600 tw-w-6 tw-h-6" />
      <span class="tw-ml-2 tw-text-lg tw-font-[450]">AI智能分析</span>
    </div>

    <div class="tw-space-y-4">
      <!-- 论证逻辑完备度 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-200">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <ListBulletIcon class="tw-w-5 tw-h-5 tw-text-green-600 tw-mr-2" />
            <span class="tw-font-bold tw-text-base">论证逻辑完备度</span>
          </div>
          <span class="tw-mr-2">7分</span>
        </div>
        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          本案程序推进脉络清晰，从受理、组庭、开庭到庭后核对及延期审理均有对应节点支撑，裁决形成过程连贯完整，能够支撑仲裁庭对争议事实的逐步归纳与结论输出。
        </div>
      </a-card>

      <!-- 争议焦点覆盖度 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-green-200 tw-bg-green-50" style="margin-top: 10px">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <ScaleIcon class="tw-w-5 tw-h-5 tw-text-green-600 tw-mr-2" />
            <span class="tw-font-bold tw-text-base">争议焦点覆盖度</span>
          </div>
          <span class="tw-mr-2">9分</span>
        </div>
        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          裁决书围绕合同效力、是否实际履行、付款条件是否成就以及费用承担等核心争议焦点展开分析，并对双方主张与证据对应关系进行回应，整体覆盖范围完整，遗漏风险较低。
        </div>
      </a-card>

      <!-- 自由裁量阐释度 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-gray-200 tw-bg-gray-50" style="margin-top: 10px">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <ScaleIcon class="tw-w-5 tw-h-5 tw-text-green-600 tw-mr-2" />
            <span class="tw-font-bold tw-text-base">自由裁量阐释度</span>
          </div>
          <span class="tw-mr-2">4分</span>
        </div>
        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          对滞纳金起算、律师费及保全相关费用是否支持等需要裁量的部分，虽有结论性表达，但对裁量标准、酌定依据与理由展开不够充分，导致说理细化程度相对偏弱。
        </div>
      </a-card>

      <!-- 事实认定归纳度 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-yellow-200 tw-bg-yellow-50" style="margin-top: 10px">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <DocumentCheckIcon class="tw-w-5 tw-h-5 tw-text-green-600 tw-mr-2" />
            <span class="tw-font-bold tw-text-base">事实认定归纳度</span>
          </div>
          <span class="tw-mr-2">6分</span>
        </div>
        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          仲裁庭能够围绕合同文本、成果交付、开票与催告等关键事实进行归纳，并对双方争点进行对应梳理，但对部分关键矛盾（如交付路径与参会真实性）的证据强弱对比还可进一步压缩提炼以增强结论支撑力。
        </div>
      </a-card>

      <!-- 裁决文书规范度 -->
      <a-card size="small" class="tw-shadow tw-border tw-border-blue-200 tw-bg-blue-50" style="margin-top: 10px">
        <div class="tw-flex tw-items-center tw-justify-between">
          <div class="tw-flex tw-items-center">
            <SparklesIcon class="tw-w-5 tw-h-5 tw-text-green-600 tw-mr-2" />
            <span class="tw-font-bold tw-text-base">裁决文书规范度</span>
          </div>
          <span class="tw-mr-2">8分</span>
        </div>
        <div class="tw-text-sm tw-text-gray-700 tw-leading-relaxed">
          文书结构完整且层次分明，能够按照请求、答辩、事实、理由与裁决结果的逻辑展开，表述总体规范清晰，并可结合相似案例要点进一步强化说理一致性与可预期性。
        </div>
      </a-card>
    </div>
  </aside>
</template>

<script setup>
import {
  SparklesIcon,
  ListBulletIcon,
  ScaleIcon,
  DocumentCheckIcon
} from '@heroicons/vue/24/outline'
</script>
