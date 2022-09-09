<template>
    This is my new view 2
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
  