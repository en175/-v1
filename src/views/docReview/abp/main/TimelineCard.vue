<template>
  <div class="tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow-sm tw-p-6 tw-mb-6">
    <div class="tw-flex tw-items-center tw-justify-between" >
      <div class="tw-flex tw-items-center">
        <ClockIcon class="tw-w-5 tw-h-5 tw-text-blue-600 tw-mr-2" />
        <span class="tw-text-lg tw-font-[450]">案情时间轴</span>
      </div>
      <a-button
          type="text"
          size="small"
          @click="toggleTimeline"
          class="tw-text-gray-400 hover:tw-text-blue-600"
      >
        <ChevronUpIcon v-if="timelineVisible" class="tw-w-5 tw-h-5" />
        <ChevronDownIcon v-else class="tw-w-5 tw-h-5" />
      </a-button>
    </div>

    <a-collapse-transition>
      <div v-show="timelineVisible" class="tw-mt-6 tw-ml-1">
        <a-timeline>
          <a-timeline-item
              v-for="(item, index) in timelineItems"
              :key="index"
              :color="item.color || 'blue'"
          >
            <span class="tw-font-bold">{{ item.date }}：</span>
            {{ item.content }}
          </a-timeline-item>
        </a-timeline>
      </div>
    </a-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ClockIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const timelineVisible = ref(false)
const timelineItems = ref([
  {
    date: '2021年10月13日',
    content: '双方签订《世茂新会枢纽新城商业项目策略顾问服务合同》（合同期4个月）。',
    color: 'green'
  },
  {
    date: '2021年10月18日',
    content: '项目启动会，申请人提交初步会议报告。'
  },
  {
    date: '2021年10月19日',
    content: '申请人开具第一笔服务费发票（27万元）。'
  },
  {
    date: '2021年10月22日-11月19日',
    content: '申请人每周通过微信群提交项目周报。'
  },
  {
    date: '2021年12月7日',
    content: '申请人提交最终版商业策划顾问报告并现场汇报。'
  },
  {
    date: '2022年2月-4月',
    content: '申请人多次发出服务沟通函及律师函催款。',
    color: 'orange'
  },
  {
    date: '2022年12月2日',
    content: '申请人向北京仲裁委员会提起仲裁（案号：（2026）京仲裁字第0321号）。',
    color: 'red'
  },
  {
    date: '2023年4月26日',
    content: '仲裁庭开庭审理本案。'
  },
  {
    date: '2023年7月28日',
    content: '仲裁庭作出裁决。',
    color: 'green'
  }
])

const toggleTimeline = () => {
  timelineVisible.value = !timelineVisible.value
}
</script>
