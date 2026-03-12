<template>
  <div>
    <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
      <h2 class="tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-2">庭审记录</h2>
      <a-button
          type="text"
          size="small"
          @click="toggleHearing"
          class="tw-text-gray-400 hover:tw-text-blue-600"
      >
        <ChevronUpIcon v-if="hearingVisible" class="tw-w-4 tw-h-4" />
        <ChevronDownIcon v-else class="tw-w-4 tw-h-4" />
      </a-button>
    </div>

    <a-collapse-transition>
      <ul v-show="hearingVisible">
        <!-- 核心诉求 -->
        <li class="tw-mb-4">
          <div class="tw-bg-white tw-rounded-2xl tw-shadow tw-border tw-border-gray-100 tw-p-4 tw-text-gray-800 tw-flex tw-items-center tw-text-base tw-font-medium tw-transition-colors tw-cursor-pointer hover:tw-bg-gray-50"
               @click="showClaimModal">
            <span :class="activeTitle === 'claim' ? 'tw-text-blue-600 tw-font-bold' : 'tw-text-gray-800'">
              核心诉求
            </span>
            <ChevronRightIcon class="tw-w-4 tw-h-4 tw-ml-auto" />
          </div>
        </li>

        <!-- 无争议事实认定 -->
        <li class="tw-mb-4">
          <div class="tw-bg-white tw-rounded-2xl tw-shadow tw-border tw-border-gray-100 tw-p-4 tw-text-gray-800 tw-flex tw-items-center tw-text-base tw-font-medium tw-transition-colors tw-cursor-pointer hover:tw-bg-gray-50"
               @click="showFactModal">
            <span :class="activeTitle === 'fact' ? 'tw-text-blue-600 tw-font-bold' : 'tw-text-gray-800'">
              无争议事实认定
            </span>
            <ChevronRightIcon class="tw-w-4 tw-h-4 tw-ml-auto" />
          </div>
        </li>

        <!-- 核心争议焦点分析 -->
        <li class="tw-mb-4">
          <div class="tw-bg-white tw-rounded-2xl tw-shadow tw-border tw-border-gray-100 tw-p-4 tw-text-gray-800 tw-flex tw-items-center tw-text-base tw-font-medium tw-transition-colors tw-cursor-pointer hover:tw-bg-gray-50"
               @click="showFocusModal">
            <span :class="activeTitle === 'focus' ? 'tw-text-blue-600 tw-font-bold' : 'tw-text-gray-800'">
              核心争议焦点分析
            </span>
            <ChevronRightIcon class="tw-w-4 tw-h-4 tw-ml-auto" />
          </div>
        </li>

        <!-- 潜在疑点与矛盾提示 -->
        <li class="tw-mb-4">
          <div class="tw-bg-white tw-rounded-2xl tw-shadow tw-border tw-border-gray-100 tw-p-4 tw-text-gray-800 tw-flex tw-items-center tw-text-base tw-font-medium tw-transition-colors tw-cursor-pointer hover:tw-bg-gray-50"
               @click="showDoubtModal">
            <span :class="activeTitle === 'doubt' ? 'tw-text-blue-600 tw-font-bold' : 'tw-text-gray-800'">
              潜在疑点与矛盾提示
            </span>
            <ChevronRightIcon class="tw-w-4 tw-h-4 tw-ml-auto" />
          </div>
        </li>
      </ul>
    </a-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUpIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useModalStore } from '../stores/modal'

const hearingVisible = ref(true)
const activeTitle = ref('')
const modalStore = useModalStore()

const toggleHearing = () => {
  hearingVisible.value = !hearingVisible.value
}

const showClaimModal = () => {
  activeTitle.value = 'claim'
  modalStore.showClaimModal()
}

const showFactModal = () => {
  activeTitle.value = 'fact'
  modalStore.showFactModal()
}

const showFocusModal = () => {
  activeTitle.value = 'focus'
  modalStore.showFocusModal()
}

const showDoubtModal = () => {
  activeTitle.value = 'doubt'
  modalStore.showDoubtModal()
}
</script>