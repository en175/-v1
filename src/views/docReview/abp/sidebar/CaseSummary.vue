<template>
  <div class="tw-mb-4">
    <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
      <h2 class="tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-2">案件概要</h2>
      <a-button
          type="text"
          size="small"
          @click="toggleSummary"
          class="tw-text-gray-400 hover:tw-text-blue-600"
      >
        <ChevronUpIcon v-if="summaryVisible" class="tw-w-4 tw-h-4" />
        <ChevronDownIcon v-else class="tw-w-4 tw-h-4" />
      </a-button>
    </div>

    <a-collapse-transition>
      <div v-show="summaryVisible" class="tw-bg-gray-50 tw-rounded tw-p-4 tw-mb-6 tw-text-gray-800 tw-text-sm tw-leading-relaxed">
        <div><b>申请人：</b>北京睿意德商业股份有限公司深圳分公司</div>
        <div><b>被申请人：</b>江门市悦泰臵业有限公司</div>
        <div><b>案由：</b>服务合同纠纷</div>
        <div><b>仲裁原因：</b>申请人主张合同签订后履行了合同义务，但被申请人未按约支付服务费及相关费用，协商未果后申请仲裁。</div>
        <div><b>仲裁结果：</b>仲裁庭认定合同成立有效，支持申请人部分请求，被申请人需支付部分服务费、滞纳金及部分律师费、保全费。</div>
      </div>
    </a-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const summaryVisible = ref(true)

const toggleSummary = () => {
  summaryVisible.value = !summaryVisible.value
}
</script>
