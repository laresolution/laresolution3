<script setup>
import { useField } from 'vee-validate'
import { toRef, computed } from 'vue'

const props = defineProps(['label', 'placeholder', 'disabled', 'name'])

const { value, errorMessage } = useField(toRef(props, 'name'));

const errorClasses = computed(() => {
    return {
    'border-red-800': !!errorMessage.value,
    'border-b-2': !!errorMessage.value
    }
})

</script>
<template>
    <div class="p-1 flex flex-col justify-between border-2 bg-zinc-100 h-18 relative">
        <input class="bg-zinc-100 border-b border-zinc-800 focus-within:outline-none leading-10 align-bottom" type="text" v-model="value" :placeholder="placeholder" :disabled="disabled" :class="errorClasses"/>
        <h4 class="order-first bg-transparent h-4 z-10 absolute bottom-8">{{label}}</h4>
        <p v-show="errorMessage" class="text-sm text-red-800 h-4">{{errorMessage}}</p>
    </div>
</template>
<style>
input:focus-within + h4 {
    font-size: 0.8em;
    transition: font-size 0.1s, bottom 0.1s;
    bottom: 3rem;
}
</style>