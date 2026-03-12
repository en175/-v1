<template>
  <Transition name="collapse">
    <slot />
  </Transition>
</template>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
