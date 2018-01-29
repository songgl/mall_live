<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in slides" :key="item.b_id">
      <img :src="item.b_img" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'

export default {
	props: {
    slides: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  components: {
  	ElCarousel: Carousel,
  	ElCarouselItem: CarouselItem
  }
}
</script>
<style>
	.el-carousel__container {
    position: relative;
    height: 395px !important;
	}
	.el-carousel__arrow{
		background-color: rgba(0,0,0,.5) !important;
	}
</style>