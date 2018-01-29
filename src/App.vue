<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
    <prompt></prompt>
  </div>
</template>

<script>
import '@/assets/css/common.css'
import prompt from '@/components/prompt/prompt'
export default {
  components: {
    prompt
  }
}
</script>

<style>
  .pageBox{
    min-width: 1200px;
    width: 100%;
  }
  .container{
    width: 1200px;
    margin: 0 auto;
  }
</style>
