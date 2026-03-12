<template>
  <div class="middle-panel" style="background: #F2F3F5; overflow: hidden; display: flex; flex-direction: column;">
    <!-- 包装 EditorArea，添加额外 padding 等适配 DocReview 布局 -->
    <div style="flex: 1; overflow: hidden; display: flex; flex-direction: column;">
      <EditorArea 
        ref="editorRef"
        :modelValue="modelValue" 
        @update:modelValue="$emit('update:modelValue', $event)" 
        :sections="sections"
        :editable="false" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditorArea from '@/components/editor/EditorArea.vue';

defineProps({
  modelValue: String,
  sections: { type: Array, default: () => [] }
});

defineEmits(['update:modelValue']);

const editorRef = ref(null);

const scrollToParagraph = (id) => {
  if (editorRef.value) {
    editorRef.value.scrollToParagraph(id);
  }
};

const highlightParagraph = (id) => {
  if (editorRef.value) {
    editorRef.value.highlightParagraph(id);
  }
};

defineExpose({
  scrollToParagraph,
  highlightParagraph
});
</script>
