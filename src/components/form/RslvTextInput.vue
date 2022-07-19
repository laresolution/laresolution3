<script setup>
import { useField } from 'vee-validate'
import { defineProps, toRef } from 'vue'

const props = defineProps(['label', 'placeholder', 'disabled', 'name'])

const { value, errorMessage } = useField(toRef(props, 'name'));


</script>
<template>
    <v-text-field v-model="value"
        :label="label"
        :placeholder="placeholder"
        :disabled="disabled"
        :error-messages="errorMessage"
        type="text"
        clearable></v-text-field>
</template>
<style>
</style>