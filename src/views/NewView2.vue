<template>
    <h1>Voici La View 2</h1>
  </template>
  <style scoped>
  h1 {text-align: center;}
  </style>
  <script setup>
  import { useForm } from 'vee-validate';
  
  // Define a validation schema
  const simpleSchema = {
    email() {
      // validate email value and return messages...
    },
    password() {
      // validate password value and return messages...
    },
  };
  
  // Create a form context with the validation schema
  useForm({
    validationSchema: simpleSchema,
  });
  </script>
  