<template>
	<view id="home">
		<NavBar>
			<view slot="center">总店</view>
			<view slot="left" @click="showTab()">
				<view class="left_box" >
					<u--image class='head_picture' width="40px" height="40px" :src="head_pic" shape='circle' radius='10px' ></u--image>
				</view>
			</view>
			
		</NavBar>
		<perindex id='perindex' ref="perindex" >
			<view class="p_left" slot="left">
				<premenu>
					<TabCtrl slot='head'>
						<u--image slot='image'  @click='clickMe' class='TabImage' width="40px" height="40px" :src="head_pic" shape='circle' radius='10px'></u--image>
						<text class="TabText" slot='text'>总店</text>
						<u-icon  class='TabIcon' slot='back' name='arrow-right' size='25' color='white'></u-icon>
					</TabCtrl>
					
					<TabCtrl slot='T1'>
						<u-icon size='23' class='TabIcon' slot='image' name='account-fill'></u-icon>
						<text class="TabText2"  slot='text' @click="logout()">退出登录</text>
						
					</TabCtrl>
					
				</premenu>
			</view>
			<view class="p_right"  slot="right"></view>
			
		</perindex>
		
		<view class="projectTab">
			<projectRow>
				<projecticon slot='ROW1' @click="switch_store()" >
					<u--image slot='image'  width='50px' height='50px' :src='store_pic'></u--image>
					<text slot='text' style="font-size: 9px;">商品管理</text>
				</projecticon>
				<projecticon slot='ROW2'>
					<u--image slot='image' width='50px' height='50px' :src='pic'></u--image>
					<text slot='text'  style="font-size: 9px;">商品下单</text>
				</projecticon>
				
			</projectRow>
			
			
			
			
			
		</view>
		

		
	</view>
	



	
	
</template>

<script>
	import perindex from '@/components/common/perindex/perindex.vue'
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import premenu from '@/components/common/perindex/permenu.vue'
	import TabCtrl from '@/components/common/perindex/TabCtrl.vue'
	import projectRow from '@/components/common/projectTab/projectRow.vue'
	import projecticon from '@/components/common/projectTab/projectIcon.vue'
	export default{
		
		components:
		{		
				perindex,
				NavBar,
				premenu,
				TabCtrl,
				projectRow,
				projecticon
		},
		data(){
			return{
				pic:'../../static/img/oreder.png',
				head_pic:'../../static/img/wallhaven-rdm6km.png',
				store_pic:"../../static/img/storehouse.png",
				parentWidth:'90%'
			}
		},
		methods:{
			logout(){
				window.sessionStorage.clear()
				this.$router.push('/pages/login/login')
			},
			showTab(){
				
				const q = document.getElementById('perindex')
				console.log(q)
				q.style.left = '0%'
				
			},
			clickMe(){
				this.$emit('addWidth',this.$data.parentWidth)
			},
			
			
		}
		
	}
	
</script>

<style scoped lang="less">
	.left_box{
		
		position: relative;
		height: 44px;
	}
	
	
	
	
	.head_picture{
		position: absolute;
		left: 7px;
		bottom: 1.5px;
	}
	.p_left{
		height: 100%;
		flex-grow: 2;
	}
	
	.p_right{
		height: 100%;
		opacity: 1;
	}
	
	.TabImage{
		position: absolute;
		top: 6px;
	}
	.TabText{
		color: aliceblue;
		position: absolute;
		left: 25px;
		top: 5px;
		
		
	}
	.TabIcon{
		position: absolute;
		top: 12px;
		right: 10px;
		
	}
	.TabText2{
		color: aliceblue;
		position: absolute;
		left: 55px;
		
		font-size: 15px;
		top: 13px
		
	}
	
	.projectTab{
		
		position: absolute;
		top:44px ;
		width: 100%;
		height: 100%;
		background-color: #e4c2c3;

		
	}
	
	
	#home{
		position: relative;
		width: 100%;
		height: 93vh;
		
		
	}
	

	
</style>