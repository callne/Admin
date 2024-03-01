<template>
	<view  class="per_index" id='per_index' @addWidth="getNum" >
		<view id='left' class="left"><slot name="left"></slot></view>
		<view class="right"><slot name='right'></slot></view>
		
		
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				screen_height:0
				
			}
		},
		methods:{
			calc_width(){
				const Devicescreen = screen.height - screen.availHeight
				this.screen_height = Devicescreen
				console.log(this.screen_height)
				return this.screen_height
				
			},
			getNum(chil){
				const q = document.getElementById("left")
				console.log(q)
				q.style.width=chil
			}
			
			
			
		}
		
		
		
		
		
		
	}
</script>

<style scoped lang="less">
	.per_index{
		display: flex;
		position: absolute;
		top: 0px;
		z-index: 99;
		width: 100%;
		left: 0;
		height: 95.0vh;

	}
	
	.left{
		background-color: #2f2e2f;
		width: 60%;
		height: 100%;
	}
	.right{
		background-color: #2f2e2f;
		opacity: 0.5;
		flex-grow: 1;
		height: 100%;
	}

</style>