<script setup>
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps(['label', 'placeholder', 'disabled', 'name'])

const { value, errorMessage } = useField(toRef(props, 'name'));


</script>
<template>
    <h4>{{label}}</h4>
    <input type="text" v-model="value" :placeholder="placeholder" :disabled="disabled" />
    <p v-show="errorMessage">{{errorMessage}}</p>
</template>
<style>
</style>