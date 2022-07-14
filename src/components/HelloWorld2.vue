<template>
  <v-container>
    <v-text-field v-model="siteName"></v-text-field>
    <v-btn @click="submit">Submit</v-btn>
  </v-container>
</template>
<script>
export default {
    name: 'HelloWorld2',
    data () {
        return {
            siteName: '',
            submitted: false
        }
    },
    computed: {
        myComputedProp () {
            return siteName + ' nice!'
        }
    },  
    methods: {
        submit () {
            this.submitted = false
        }
    },
    watch: {
        myComputedProp (newProp, oldProp) {
            
        }
    }
}
</script>