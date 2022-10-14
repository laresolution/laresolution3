<script setup>
import { useField } from 'vee-validate'
import { ref, toRef, computed } from 'vue'

const props = defineProps(['label', 'placeholder', 'disabled', 'name'])

const { value, errorMessage } = useField(toRef(props, 'name'));

const errorClasses = computed(() => {
    return {
    'border-red-800': !!errorMessage.value,
    'border-b-2': !!errorMessage.value
    }
})

const input = ref(null)

const focusInput = () => {
    input.value.focus()
}

</script>
<template>
<div class="p-1 myInput">
    <div class="flex flex-col text-lg justify-end h-16 relative">
        <input ref="input" class="text-2xl border-b border-zinc-800 focus-within:outline-none align-bottom" type="text" v-model="value" :placeholder="placeholder" :disabled="disabled" :class="errorClasses"/>
        <div @click="focusInput" class="order-first bg-transparent h-4 z-5 absolute bottom-6" :class="{ hovered: !!value}">
            <h4>{{label}}</h4>
        </div>
        <div class="text-sm text-red-800 h-4">
            <span>{{errorMessage}}</span>
        </div>
    </div>
</div>
</template>
<style scoped>
input:focus-within + div  {
    opacity: 0.5 ;
    font-size: 0.9em;
    transition: all 0.3s ease-in, bottom 0.1s;
    bottom: 3.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    
}

.hovered {
    opacity: 0.5 ;
    font-size: 0.9em;
    transition: all 0.3s ease-in, bottom 0.1s;
    bottom: 3.5rem;
    margin-bottom: 0em;
    line-height: 1.5;
    
}
.myInput {
  padding: 15.0em;
  margin-top: -10em;
  line-height: 0em;
  margin-bottom: -29em;
}

div {
  margin-bottom: 0em;
  line-height: 0.5;
}

</style>
