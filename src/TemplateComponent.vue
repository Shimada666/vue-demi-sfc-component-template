<script lang="ts" setup>
import { version } from 'vue-demi'
</script>

<template>
  <div>
    <div class="template-component">
      Template Component. Vue version: {{ version }}
    </div>
  </div>
</template>

<style scoped>
.template-component {
  color: #2c3e50;
}
</style>
