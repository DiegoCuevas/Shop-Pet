<template>
  <div class="custom-grid w-full border border-black">
    <div class=" ">logo</div>
    <div class=" border border-black">nav</div>
    <Sidebar />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Home,
    Sidebar,
  }
}
</script>

<style>
  .custom-grid{
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    justify-content: start;
  }
</style>