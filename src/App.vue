<template>
  <div
  
    id="app"
  >
   <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  mounted(){
  },
  methods: {
  
  }
};
</script>

<style>
#app {
  font-family: serif;
  color: #2c3e50;
  height: 100%;
}

</style>
