<script setup>
import { reactive, computed } from 'vue'


// site name validation
const state = reactive({
  siteName: ''
})


// submitted status
state.submitted = false
const myComputedProp = computed(() => {
  return state.siteName + ' is a nice website!'
})
const submit = () => {
  state.submitted = true
  // go to page
}

</script>

<template>
  <input v-model="state.siteName" data-test="input">
  <button @click="submit" v-if="!state.submitted" data-test="button">Submit</button>
  <p v-if="state.submitted" data-test="label">{{myComputedProp}}</p>
</template>