<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
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
