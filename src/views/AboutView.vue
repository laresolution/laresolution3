<template>
  <div>
    <MyTextInput name="email" />

    <MyTextInput name="password" />
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import MyTextInput from '@/components/MyTextInput.vue';

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
