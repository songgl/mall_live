<template>
  <span v-text="content"></span>
</template>
<script>
export default {
	data(){
		return {
			content: ''
		}
	},
	props:{
		endTime:{
			type: [Number,String],
			default :''
		},
		endText:{
			type : String,
			default:'已结束'
		},
		callback : {
			type : Function,
			default :''
		}
	},
	mounted () {
		this.countTime(this.endTime)
	},
	watch: {
		endTime () {
			this.countTime(this.endTime)
		}
	},
	methods: {
		countTime (time) {
			let self = this;
			let timer = setInterval(function () {
        let nowTime = new Date()
        let endTime = new Date(time)
        let dValue = endTime.getTime() - nowTime.getTime()
        if (dValue > 0) {
          let day = Math.floor(dValue/86400000)
					let hour=Math.floor((dValue/3600000)%24)
					let min=Math.floor((dValue/60000)%60)
					let sec=Math.floor((dValue/1000)%60)
					hour = hour < 10 ? "0" + hour : hour
					min = min < 10 ? "0" + min : min
					sec = sec < 10 ? "0" + sec : sec
					let format = '';
					if(day > 0){
						format =  `${day}天${hour}小时${min}分${sec}秒`
					}
					if(day <= 0 && hour > 0 ){
						format = `${hour}小时${min}分${sec}秒`
					}
					if(day <= 0 && hour <= 0){
						format =`${min}分${sec}秒`
					}
					if(day <= 0 && hour <= 0 && min <= 0) {
						format =`${sec}秒`
					}
					self.content = format;
        }else{
          clearInterval(timer);
					self.content = self.endText;
					self._callback();
        }
      }, 1000);
		},
		_callback(){
			if(this.callback && this.callback instanceof Function){
				this.callback(...this);
			}
		}
	}
}
</script>