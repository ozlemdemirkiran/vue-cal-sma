<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
   <nav class="navbar navbar-expand navbar-dark bg-dark">
     <router-link to="/" class="navbar-brand">HOME Page</router-link>
     <div class="navbar-nav mr-auto">
       <li class="nav-item">
        <router-link to="/ekle" class="nav-link">Todo Ekle </router-link>
       </li>
       
     </div>
   </nav>
   <div class="container mt-5">
      <router-view/>
   </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>

</style>
