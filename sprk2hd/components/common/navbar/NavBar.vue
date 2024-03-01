<template>
	<view class='nav-bar'>
		
		<view class="left"  ><slot name='left'></slot></view>
		<view class="center"><slot name='center'></slot></view>
		<view class="right"><slot name='right'></slot></view>
		
	</view>
</template>

<script>
	export default{
		props:{
			FuncName:String
			
			
		},
		
		
		methods:{

			
		}
		
	}
</script>

<style scoped lang="less">
	.nav-bar{
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow:  0 1px 1px rgba(100, 100, 100, .1);
		background-color: #e8989a;
		color: aliceblue;
		
	}
	
	.left,.right{
		width: 60px;
		position: relative;
		
	}
	
	.center{
		flex:1;
		
		
	}
	
	
	
	
</style>