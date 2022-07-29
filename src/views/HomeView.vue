<template>
  <div>
    <RslvTextInput name="siteName" label="Site Name"></RslvTextInput>
    <RslvTextInput name="fullName" label="Full Name"></RslvTextInput>
    <RslvTextInput name="email" label="Email"></RslvTextInput>
    <RslvTextInput name="phone" label="Phone"></RslvTextInput>
    <RslvTextInput name="favoriteNinjaTurtle" label="Favorite Ninja Turtle"></RslvTextInput>
    <RslvTextInput name="siteTest" label="Votre Site Test "></RslvTextInput>
  </div>
</template>

<script setup>
import { useForm, } from 'vee-validate'
import RslvTextInput from '../components/form/RslvTextInput.vue';

const simpleSchema = {
  siteName(value) {
    return value ? true : 'The site name field is required'
  },
  fullName(value) {
    return value ? true : 'The full name field is required'
  },
  email(value) {
    return value ? true : 'The email field is required'
  },
  phone(value) {
    return value ? true : 'The phone field is required'
  },
  favoriteNinjaTurtle(value) {
    if (value !== 'Donatello') {
      return 'Your favorite turtle is not Donatello'
    } else {
      return true
    }
  },
  siteTest(value) {
    if (value?.length < 3 ) {
    return 'Votre site doit contenir un minimum de 3 caracteres';
    } else if (value?.length > 255){
      return 'Votre site doit contenir un maximum de 255 caracteres';
    }else {
      return true
    }
  }
}
useForm({
  validationSchema: simpleSchema
})
</script>