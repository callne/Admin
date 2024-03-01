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
				<text class="CTN_text"   @click="None()" id="1"  >普通商品</text>
			</view>
			
			<view  class="CTN">
				<text   @click="None2()" id="2"  >项目归类名称</text>
			</view>
			
			
		</view>
		
<!-- 		
		// 表格 -->

		<view id="ADD_FORM" :style="{display:this.$data.ds}">
			<u--form	labelPosition="left" :model="model1" :rules='rules'	ref="form1"	>
					<GodRow>
						<u-form-item labelWidth="105px"  prop="godName" class='inner A'  label="商品名称">
							<u--input v-model='model1.godName' ></u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px"  prop="godCode" class='inner' label='商品条码'>
							<u--input v-model='model1.godCode'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='商品分类'>
							<u--input v-model='model1.godCategory'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='商品单位'>
							<u--input v-model='model1.godUnit'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='销售价'>
							<u--input v-model='model1.godPrice'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='会员价格'>
							<u--input v-model='model1.vipPrice'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='成本价'>
							<u--input v-model='model1.costPrice'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='商品描述'>
							<u--input v-model='model1.proDescription'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow style="position: relative;">
						<u-form-item labelWidth="105px"  class='inner' label='商品排序'>
							<u-icon  style="position:absolute;left: 85px;" @click="toast_error()" name='question'></u-icon>
							<u--input v-model='model1.proOrder'>
								
							</u--input>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='库存预警'>
							<u--input v-model='model1.storeAlarm'>
								
							</u--input>
						</u-form-item>
					</GodRow>
						
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='支持积分兑换'>
							<u-switch v-model="model1.pointsExc"  @change="change" ></u-switch>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='商品启用状态'>
							<u-switch v-model="model1.godActive"   @change="change" ></u-switch>
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-form-item labelWidth="105px" class='inner' label='上传图片'>
							<u-upload :fileList="model1.fileList1"      @delete="deletePic"   @afterRead="afterRead"   name="1"	multiple  :maxCount="10"></u-upload>
				
						</u-form-item>
					</GodRow>
					
					<GodRow>
						<u-button  @click="dataUpload()" text='保存' color="linear-gradient(to right,#e8989a,#e8989a)"></u-button>
					</GodRow>
						
				<!-- 		保存按钮缺少@click，没有写服务项目的表单，图片上传也没写 -->
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
		onShow() {
			console.log(this.$data.model1)
			
		},
		data(){
			return {
				TEXT1:null,
				ds:'',
				ds2:'none',
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
					serViceName:''
				},
				rules2:{
					serViceName:[{
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
		methods:{
			back(){
				this.$router.push('/pages/godsstore/godsstore')
				setTimeout(()=>{
					for(let i in this.$data.model1){
						if(i == 'fileList1'){
							this.$data.model1[i] = []
							
						}else{
							this.$data.model1[i] = ''
						}
						
						
								
					}
				},50)
			},
			None(){
				// this.$data.ds=''
				// this.$data.ds2='none'


				

			},
			None2(){
				// this.$data.ds2=''
				// this.$data.ds='none'
			this.$router.push('/pages/godsstore/godsAdd2')

				
			},

			
			change(e){
				this.godActive = e
				console.log(this.godActive)
			},
			change2(e){
				this.pointsExc = e
				console.log(this.pointsExc)
			},
			async afterRead(event){
				let lists = [].concat(event.file)

				let fileListLen = this.model1.fileList1.length
				lists.map((i)=>{
					

					this.model1.fileList1.push(i)
			
				})
				
				// for(let i in this.$data.model1){
				// 	if(i == 'fileList1'){
				// 		// var reader = new FileReader()
				// 		// var a =reader.readAsArrayBuffer(new Blob([this.$data.model1[i][0].url],))
				// 		const fs = require('fs')
				// 		const a = fs.writeFile('../a.jpg',this.$data.model1[i][0].thumb,'utf-8')
				// 		console.log(a)
				// 		// console.log(this.$data.model1.fileList1)
				// 		let q = this.$data.model1[i][0].thumb
						
				// 		console.log(q)
						
				// 	}
				// }

				
				// console.log(this.model1.fileList1)
				// const a = this.model1.fileList1[0].url
				// const b = a.replace('blob:','')
				// const Newimg = open(b)
				// Newimg.save('../../static/img/Q1.jpg')
				// console.log(a)
				// console.log(event)
				// console.log(lists)

				
			},
			deletePic(event) 
			{
							this.model1.fileList1.splice(event.index, 1)
			},
			
					
			
			dataUpload()
			{
				

				const todo = uniCloud.importObject('todo')
				this.$refs.form1.validate().then(async res=>{
			
					if(this.$data.model1.godName&&this.$data.model1.godCode)
					{		
						for(let i in this.$data.model1){
							if(i == 'fileList1'){
								
								
								
							}
						}
						
						todo.addGod(this.$data.model1)
						
				setTimeout(()=>{
					for(let i in this.$data.model1){
						if(i == 'fileList1'){
							
							this.$data.model1[i] = []
							
						}else{
							this.$data.model1[i] = ''
						}
						
						
								
					}
				},50)
						
						
						
						this.$router.replace('/pages/godsstore/godsstore')
						
					}
				
					
			})

			
			},
			
			dataUpload2()
			{
				
				this.$data.rules.godName=''
				this.$data.rules.godCode=''
				const todo = uniCloud.importObject('todo')
				this.$refs.form1.validate().then(async res=>{
					console.log(this.$data.model2)
					if(this.$data.model2.serViceName)
					{
						
						
						todo.addProject(this.$data.model2)
						this.$refs.form2.resetFields();
						this.$router.replace('/pages/godsstore/godsstore')
						
					}
					// if(todo.)
				
			})
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