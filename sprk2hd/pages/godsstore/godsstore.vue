<template>
	<view id="g_home">
		<NavBar>
			<view class='back'  slot='left' @click="back()">
				<u-icon name='arrow-left' color='black' size="28"></u-icon>
			</view>
			
			<view slot='center'>
				<u-search :clearabled="true" v-model="keyword" shape="round"
					    placeholder="请输入商品名称或编码"

					></u-search>
			</view>
			
			<view slot='right' @click="switch_Add()">
				<u-icon class='back' name="plus" size="28" color='black'>	
				</u-icon>
				
			</view>
			
			
		</NavBar>
		<view class="projectTab">
			<view class="left"  >
				<scroll-view scroll-y="true" style="height:500px;position: relative;">
					
					<view style="padding: 10px 0  10px 0;"  class="noActive_color"  @click="Aclick(index);GetMes(item.godCategory)"  :class="isActive==index?'active_color':''" 
					 v-for="(item,index) in items">
						<text>{{item.godCategory}}</text>
					</view>
				</scroll-view>
				
				
			</view>
			
			<view class="right">
				
				<scroll-view style="height: 700px;">
					
						<view  @click="addPage()" class="list_container" v-for="(item,index) in lists ">
							<view   style="text-align:center;width: 25%;height: 100%;">
								
								<image style="margin:5px 0;width: 80%;height: 50px;" :mode="scaleToFill"  v-bind:src="item.fileList1[0].thumb" ></image>
								
							</view>
							<view style="width: 55%;height: 100%;">
							
								<view> {{item.godName}}</view>
								<view style="margin: 15px 0 0 0;">￥{{item.godPrice}}</view>
							</view>
							<view class="list_box" >
								<u-icon name="plus"  class="center_img"  ></u-icon>
							</view>
							
							
						</view>
						
		
		
					
				</scroll-view>
				
			</view>
			
			
			
		</view>
		
<!-- 		<scroll-view class="projectTab"> 
			<view class="left">
				
			</view>
			
			<view class="right">
				
			</view>
		</scroll-view> -->
		
		
	</view>
	
	
	
	
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import GodRow from '@/components/common/godsStore/GodRow.vue'
	import { onLoad } from '../../uni_modules/uview-ui/libs/mixin/mixin'
	
	export default{
		data(){
			return{
				keyword:'',
				 items :[],
				 lists:[],
				isActive:0

			}
		},
		components:{
			NavBar,
			GodRow
		},
		onLoad:async function() {
			const todo = uniCloud.importObject('todo')
			const qry = await todo.Find()
			this.$data.items.push(...qry.data)
			
		
		},
		methods:{
			
			Aclick(index){

			
			    this.isActive = index
			},
			back(){
				this.$router.push('/pages/Home/Home')
				
			},
			switch_Add(){
				this.$router.push('/pages/godsstore/godsAdd')
				
				
			},
			GetMes:async function(info){
				this.$data.lists=[]
				const todo = uniCloud.importObject('todo')
				const qry = await todo.FindDetealInfo(info)
				console.log(...qry.data)
				this.$data.lists.push(...qry.data)
				const q =this.$data.lists
				
				q.forEach((obj)=>{
					if(obj.fileList1[0]){
						console.log(obj.fileList1[0].thumb)
					}
					
				})
				
			},
			addPage(){
				this.$router.push('/pages/godsstore/godschange')
			}

			
			
		}
		
		
	}
	
	
</script>

<style scoped>
	.list_container{
		width: 100%;height: 60px;
		border-bottom: .1px solid lightgray;
		box-shadow: 0.1px 0.1px 0.1px lightgray;
		display: flex;
		
	},
	.center_img{
		position: absolute;top: 50%;left: 50%;
		transform: translate(-50%,-50%);
	},
	.list_box{
		width: 20%;height: 100%;position: relative;
	},
	.back{
		position: absolute;
		top: 9px;
		left: 7px;
			
		
	},
	.active_color{
		
		background: white;
	},
	.noActive_color{
		text-align: center;

	},
	.Search_box{
		background-color: white;
		top: 3px;
		position: absolute;
		
	}
	.projectTab{
		
		position: absolute;
		top:44px ;
		width: 100%;
		height: 100%;
		background-color: #e4c2c3;
		display: flex;

		
	}
	.left{
		flex-grow: 1;

		background-color: #dfe9eb;

	}
	.right{
		flex-grow: 3;

		background-color: white;

		
	}
	
	
</style>