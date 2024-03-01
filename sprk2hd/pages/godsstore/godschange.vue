<template>
	<view>
		<NavBar>
			<view class='back'  slot='left' @click="back()">
				<u-icon name='arrow-left' color='black' size="28"></u-icon>
			</view>
			
	
				<view slot="center">总店</view>
				
				
	
			
			
		</NavBar>
	
	
	</view>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import GodRow from '@/components/common/godsStore/GodRow.vue'
	export default{
		data(){
			return {
				
				
			}
		},
		components:{
			NavBar,
			GodRow
		},
		methods:{
			back(){
				this.$router.push('/pages/godsstore/godsstore')
			}
			
			
		}
		
		
	}
	
	
	
</script>

<style scoped>
	.back{
		position: absolute;
		top: 9px;
		left: 7px;
			
		
	}
	
	
</style>