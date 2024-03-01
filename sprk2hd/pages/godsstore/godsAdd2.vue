<template>
	<view id="Add_HOME">
				<u-toast z-index="1009" ref="uToast" />
		<NavBar>
				<view class='back'  slot='left' @click="back()">
					<u-icon name='arrow-left' color='black' size="28"></u-icon>
				</view>
			
			<view slot='center' class="text_b">
				<text >新增商品</text>
			</view>
			
		</NavBar>
	<!-- 	//选项 -->
		<view class="ADD_CTN">
			<view   class="CTN">
				<text    @click="None()" id="1"  >普通商品</text>
			</view>
			
			<view  class="CTN">
				<text  class="CTN_text"  @click="None2()" id="2"  >项目归类名称</text>
			</view>
			
			
		</view>
		
<!-- 		
		// 表格 -->

		
		<view id="service_FORM"   :style="{display:this.$data.ds2}">
			<u--form labelPosition="left"  :model="model2" :rules="rules2" 	ref="form2">
				<GodRow>
					<u-form-item labelWidth="105px"  prop="godCategory" class='inner B'  label="商品服务归类名称">
						<u--input v-model='model2.godCategory' ></u--input>
					</u-form-item>
				</GodRow>
				
				<GodRow>
					<u-button @click="dataUpload2" text='保存' color="linear-gradient(to right,#e8989a,#e8989a)"></u-button>
				</GodRow>
				
			</u--form>
		</view>
		
	</view>
	
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import GodRow from '@/components/common/godsStore/GodRow.vue'
	import { open } from '@/static/JS/save_file.js'
	export default{
		components:{
			NavBar,
			GodRow
			
		},
		data(){
			return {
				TEXT1:null,
				ds:'none',
				ds2:'',
				model1:{
					godName:'',
					godCode:'',
					godCategory:'',
					godUnit:'',
					godPrice:'',
					vipPrice:'',
					costPrice:'',
					proDescription:'',
					proOrder:'',
					storeAlarm:'',
					pointsExc:'',
					godActive:'',
					godPic:'',
					fileList1: []
					
				},
				model2:{
					godCategory:''
				},
				rules2:{
					godCategory:[{
						required:true,
						message:'必须填写名称',
						trigger:'blur'
					}]
				},
				
				rules:{
					 godName:[{
						required:true,
						message:'必须填写名称',
						trigger:'blur'
					},{
						min:1,
						max:10,
						message:'长度在1到10个字符之间',
						trigger:'blur',
					}],
					godCode:[{
						required:true,
						message:'请输入商品码',
						trigger:'blur',
					},{
						min:1,
						max:15,
						message:'长度在1到15个字符之间',
						trigger:'blur',
					}]
				 
				},
				
			}
			
		},
		destroyed(){
			
		},
	
		onShow(){
			
		},
		
		methods:{
			back(){
				this.$router.push('/pages/godsstore/godsstore')
			},
			None(){

				this.$router.push('/pages/godsstore/godsAdd')

				

			},
			None2(){

					

				
			},
			// check(){
				
			// 	if(event.currentTarget.classList.contains("CTN_text"))
			// 	{
			// 		event.currentTarget.classList.remove('CTN_text')
					
					
					
			// 	}
			// 	else
			// 	{
			// 		const q = document.getElementsByTagName('uni-text')
			// 		for(let i of q){
			// 			i.classList.remove('CTN_text')
			// 		}
			// 		event.currentTarget.className = 'CTN_text'
					
			// 	}
				
				
			// }
			
			change(e){
				this.godActive = e
				console.log(this.godActive)
			},
			change2(e){
				this.pointsExc = e
				console.log(this.pointsExc)
			},
		
			deletePic(event) 
			{
							this.model1.fileList1.splice(event.index, 1)
			},
			
					
		
			dataUpload2:async function()
			{

				const todo = uniCloud.importObject('todo')
				
				
				this.$refs.form2.validate().then(async res=>{

					if(this.$data.model2.godCategory)
					{
						
						console.log(this.$data.model2)
						todo.addProject(this.$data.model2)
						
						
						this.$router.push('/pages/godsstore/godsstore')
						
					}
					// if(todo.)
				
			})
			
			setTimeout(()=>{
				this.$data.model2.godCategory=''
			},50)
			
			},
	
						
			toast_error()
			{
	
				alert('商品排序默认值为100，值越大越靠前')
							
							
						
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
	.text_b{
		color: black;
		font-size: 19px;
		
	},
	.B{
		
	},
	
	.ADD_CTN{
		display: flex;
		width: 100%;
		height: 40px;
		align-items: center;
		justify-content: center;
		background-color: #e8989a;
		
	}
	.CTN{
		flex-grow: 1;
		width: 100%;
		text-align: center;
		
	}
	.CTN_text{
/* 		font-size: 100px; */
		padding: 0 0 6px 0;
		border-bottom: 3px solid white;
	}
	
	#ADD_FORM{
		
		width: 100%;
		height: 87.3vh;

		
	},
	#service_FORM{
		width: 100%;
		height: 87.3vh;
	
		
		
	},
	.inner{
		margin: 0 10px;
	}
	
	
	
	
</style>