<template>
	<view class="projectcontainer">
		<view class="TabRow"><slot name="image"></slot></view>
		<view class="TabRow textSize"><slot name="text"></slot></view>
		
		
	</view>
</template>

<script>
</script>

<style scoped>
	.projectcontainer{
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		
		
		
	}
	
	.TabRow{
		
		
		flex-grow: 1;
	}
	.textSize{
		font-size: 3px;
		text-shadow: 1px 1px 0.1px gray;
	}
	
	
</style>