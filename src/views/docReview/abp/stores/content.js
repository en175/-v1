import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContentStore = defineStore('content', () => {
    const content = ref('')

    const saveContent = (newContent) => {
        content.value = newContent
        // 这里可以添加保存到后端的逻辑
        console.log('保存内容：', newContent)
    }

    return {
        content,
        saveContent
    }
})