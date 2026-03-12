<template>
  <div class="tw-mb-4">
    <div class="tw-flex tw-items-center tw-justify-between tw-mb-2">
      <h2 class="tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-blue-50 tw-rounded-lg tw-px-4 tw-py-2">
        案件材料
      </h2>
      <a-button
        type="text"
        size="small"
        @click="toggleMaterials"
        class="tw-text-gray-400 hover:tw-text-blue-600"
      >
        <ChevronUpIcon v-if="materialsVisible" class="tw-w-4 tw-h-4" />
        <ChevronDownIcon v-else class="tw-w-4 tw-h-4" />
      </a-button>
    </div>

    <a-collapse-transition>
      <ul v-show="materialsVisible">
        <li class="tw-mb-2">
          <a-button
            type="text"
            block
            @click="showPetitionModal"
            class="tw-flex tw-items-center tw-justify-between tw-p-3 tw-rounded-lg hover:tw-bg-gray-100 tw-h-auto"
          >
            <div class="tw-flex-1 tw-text-left">
              <span>仲裁申请书</span>
            </div>
            <div class="tw-flex tw-flex-col tw-items-end tw-text-right tw-min-w-[60px]">
              <span>1页</span>
            </div>
          </a-button>
        </li>

        <li class="tw-mb-2">
          <a-button
            type="text"
            block
            @click="showDefenseModal"
            class="tw-flex tw-items-center tw-justify-between tw-p-3 tw-rounded-lg hover:tw-bg-gray-100 tw-h-auto"
          >
            <div class="tw-flex-1 tw-text-left">
              <span>答辩书</span>
            </div>
          </a-button>
        </li>

        <li class="tw-mb-2">
          <a-button
            type="text"
            block
            @click="showEvidenceModal"
            class="tw-flex tw-items-center tw-justify-between tw-p-3 tw-rounded-lg hover:tw-bg-gray-100 tw-h-auto"
          >
            <div class="tw-flex-1 tw-text-left">
              <span>证据材料</span>
            </div>
          </a-button>
        </li>
      </ul>
    </a-collapse-transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useModalStore } from '../stores/modal'

const materialsVisible = ref(true)
const modalStore = useModalStore()

const toggleMaterials = () => {
  materialsVisible.value = !materialsVisible.value
}

const showPetitionModal = () => {
  modalStore.showPetitionModal()
}

const showEvidenceModal = () => {
  modalStore.showEvidenceModal()
}

const showDefenseModal = () => {
  modalStore.showDefenseModal()
}
</script>
