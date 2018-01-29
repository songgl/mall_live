<template>
  <div class="pageBox">
    <my-header></my-header>
    <my-search></my-search>
    <!-- <keep-alive> -->
      <navigation>
        <router-view />
      </navigation>
    <!-- </keep-alive> -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from '@/components/header/header'
import myFooter from '@/components/footer/footer'
import mySearch from './private/search'
export default {
  components: {
    myHeader,
    myFooter,
    mySearch
  }
}
</script>