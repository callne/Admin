<template>
	<view id="permenu">
		<view class="box">
			<view class="head"><slot name="head"></slot></view>
			<view class="TabCtrl" ><slot  name="T1"></slot></view>
		</view>
	</view>
	
	
	
</template>

<script>
</script>

<style scoped lang="less">
	#permenu{

		width: 100%;
		height: 100%;
		position: relative;
		
;

		
	}
	.head{
		width: 100%;
		height: 54px;
		border-bottom:1px solid lightgray ;
		
	}
	.TabCtrl{
		width: 100%;
		height: 44px;
		border-bottom:1px solid lightgray ;
		cursor: pointer;
		
		
	}
	.box{
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 100%;
		left: 50%;
		transform: translate(-50%,0%);
		
	}
	
	
	
	
</style>