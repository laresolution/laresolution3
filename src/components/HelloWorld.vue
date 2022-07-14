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
  <v-container>
    <v-text-field v-model="state.siteName" data-test="input"></v-text-field>
    <v-btn @click="submit" v-show="!state.submitted" data-test="button">Submit</v-btn>
    <v-label v-show="state.submitted" data-test="label">{{myComputedProp}}</v-label>
  </v-container>
</template>