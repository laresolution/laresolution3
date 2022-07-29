<template>
  <div>
    <RslvTextInput name="email" />

    <RslvTextInput name="password" />
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import RslvTextInput from '@/components/form/RslvTextInput.vue';

// Define a validation schema
const simpleSchema = {
  email(value) {
    // validate email value and return messages...
  },
  password(value) {
    // validate password value and return messages...
  },
};

// Create a form context with the validation schema
useForm({
  validationSchema: simpleSchema,
});
</script>
