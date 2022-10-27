<template>
   <div class="p-1 myInput2">
  <div  id="app">
    
      <div class="one">   
    <Menu></Menu>
    <router-view></router-view>
  </div>
</div>
  </div>
</template>

<script>
import Menu from './components/form/Menu.vue';
export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { Menu }
}
</script>
<style scoped>
.myInput2{
    
    display: flex;
    justify-content: center;
}
 
  </style>