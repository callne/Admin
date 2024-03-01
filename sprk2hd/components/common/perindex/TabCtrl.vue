<template>
	<view class="container" @addWidth="getNum" >
		<view class="innerTab">
			<view class="innerT1"  @click="collApse()"><slot name="image"></slot></view>
			<view class="innerT2"><slot name="text"></slot></view>
			<view class="innerT3" @click="quit()"><slot name="back"></slot></view>
			
		</view>
		
		
	</view>
	
	
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		
		methods:{
			quit(){
				const q = document.getElementById('perindex')
				q.style.left =  '-100%'
			
			},
			collApse(){
				const q = document.getElementsByClassName("container")
				console.log(q)
			},
			
			getNum(chil){
				const q = document.getElementsByClassName("container")
				console.log(q)
				q.style.width=chil
			}
			
			
		}
		
	}
	
</script>

<style scoped lang="less">
	.container{
		padding: 0 10px 0 10px;
		// width: 90%;
		height: 100%;
		
		
	}
	.innerTab{
		height: 100%;
		display: flex;
		
		
		  
	}
	.innerT1{
		flex-grow: 1;
		position: relative;
		
	}
	.innerT2{
		flex-grow: 5;
		position: relative;
	}
	.innerT3{
		flex-grow: 2;
		position: relative;
	}
	
	
	
</style>