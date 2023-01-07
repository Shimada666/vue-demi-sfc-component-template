<script lang="ts" setup>
import { computed, ref, version, watch } from 'vue-demi'

withDefaults(defineProps<{ msg: string; name: string | number }>(), { msg: 'Hello', name: 'my friend' })
const emit = defineEmits<{
  (event: 'update', value: number): void
}>()

const count = ref(0)
const doubled = computed(() => count.value * 2)

function inc() {
  count.value += 1
}
function dec() {
  count.value -= 1
}

const decText = '<b>Dec</b>'

watch(count, value => emit('update', value))
</script>

<template>
  <div>
    <div class="template-component">
      Template Component. Vue version: {{ version }}
    </div>
    <div>
      <h3>{{ msg }}, {{ name }}</h3>
      <button @click="inc">
        Inc
      </button>
      <div>{{ count }} x 2 = {{ doubled }}</div>
      <button @click="dec()" v-html="decText" />
    </div>
  </div>
</template>

<style scoped>
.template-component {
  color: #2c3e50;
}
</style>
