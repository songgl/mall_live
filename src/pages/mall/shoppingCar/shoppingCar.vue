<template>
  <div class="pageBox">
    <my-header></my-header>
    <flow-path></flow-path>
    <div class="thisHeader">
      <div class="container clearfix">
        
      </div>
    </div>
    <div class="pageContent">
      <div class="container"></div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'
import flowPath from './private/flowPath'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {
    
  },
  components: {
    myHeader,
    myFooter,
    flowPath
  }
}
</script>

<style scoped>
  .thisHeader{
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
  }
  
  .headerTitle{
    float: left;
    margin: 15px 20px;
    font-size: 24px;
  }
  .pageContent{
    min-height: 600px;
    background-color: #fff;
    width: 100%;
    min-width: 1200px;
  }
</style>
