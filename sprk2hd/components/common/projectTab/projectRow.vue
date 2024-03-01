<template>
	<view class="Pcol">
		<view class="TabRow" @click="switch_godstore()"><slot name="ROW1"></slot></view>
		<view class="TabRow"><slot name="ROW2"></slot></view>
		<view class="TabRow"><slot name="ROW3"></slot></view>
		<view class="TabRow"><slot name='ROW4'></slot></view>
		<view class="TabRow"><slot name='ROW5'></slot></view>
		<view class="TabRow"><slot name='ROW6'></slot></view>
	</view>

</template>

<script>
	export default{
		
		methods:{
			
			switch_godstore(){
				console.log('qweqweqweqwesdq')
				this.$router.push('/pages/godsstore/godsstore')
			}
		}
		
		
	}
</script>

<style scoped>
	.Pcol{
		display: flex;
		width: 100%;
		height: 50px;
		margin: 5px 0 0 0;
		
	}
	.TabRow{
		flex-grow: 1;
		width: 25%;
		height: 100%;
		position: relative;
		
		
	}
	
	
</style>