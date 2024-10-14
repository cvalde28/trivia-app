<template>
  <div class="flex items-center justify-center gap-4">
    <h1 class="text-6xl font-thin text-slate-700 uppercase">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
};
</script>

<style scoped>
/* Your styles for BaseTitle */
</style>
