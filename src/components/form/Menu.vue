<script setup>
import { reactive, computed } from 'vue'


// site name validation
const state = reactive({
  siteName: 'Choisis'
})


// submitted status
state.submitted = false
const myComputedProp = computed(() => {
  return state.siteName + ' Ton Menu'
})
const submit = () => {
  state.submitted = true
  // go to page
}

</script>

<template>
    
    <aside>
        <div class="p-1 myInput">   
    <div>
        <ul>
            <li>
                <a href="/">{{myComputedProp}}</a>
            </li>
            <li>
                <a href="new1">Test</a>
            </li>
            <li>
                <a href="new2">tes2</a>
            </li>
            <li>
                <a href="new3">test3</a>
            </li>
            <li>
                <a href="WebSite">WebSite</a>
            </li>
        </ul>
    </div>
</div>
</aside>

</template>
<style scoped>
aside {
    position: fixed;
    background-color: rgb(106, 145, 147);
    height: 100vh;
    width: 240px;
    left: 0;    
    top: 0;
    border-right: 5px solid #ececec;
    transition: all .3s ease;
}
.myInput {
    display: flex;
    justify-content: center;
          }
        
</style>