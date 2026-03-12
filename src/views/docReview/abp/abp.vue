<template>
  <div class="tw-flex tw-h-screen tw-bg-gray-50">
    <!-- 左侧边栏 -->
    <LeftSidebar />
    <!-- 主内容区域 + 右侧栏包裹容器 -->
    <div class="tw-flex tw-flex-1 tw-h-screen">
      <!-- 主内容区 -->
      <MainContent />
      <!-- 右侧 AI 分析栏 -->
      <RightSidebar />
    </div>

    <!-- 各种弹窗模态框 -->
    <Modals />
  </div>
</template>

<script setup>
import LeftSidebar from './LeftSidebar.vue'
import MainContent from './MainContent.vue'
import RightSidebar from './RightSidebar.vue'
import Modals from './Modals.vue'
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>