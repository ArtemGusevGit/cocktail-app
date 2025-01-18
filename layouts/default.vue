<template>
  <div class="main d-flex gap-24 pa-12 margin-center hidden">
    <common-app-nav class="nav" />
    <div class="content hidden full-w">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .main {
    width: 100vw;
    height: 100vh;
    max-width: 1024px;
  }

  .content {
    overflow-y: auto;
  }
</style>