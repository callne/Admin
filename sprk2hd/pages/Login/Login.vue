<template>
	<view class="login_container">
		
		<u-notify ref="uNotify" message="Hi uView"></u-notify>
		
		<view class="login_box">
			<!-- 头像 -->
			<view class="avatar_box">
				<img src='../../static/img/wallhaven-rdm6km.png'>
			</view>
			<!-- 登录表单 -->
			<u-form ref='uForm' :model="loginForm" :rules="rules" class='login_form_'>
				<!-- 用户名 -->
				<u-form-item ref="item1" prop="username">
					<u-input v-model="loginForm.username"  placeholder="账号" prefixIcon="account-fill"></u-input>
				</u-form-item>
				<!-- 密码 -->
				<u-form-item  prop="password">
					<u-input type="password" v-model="loginForm.password" placeholder="密码" prefixIcon="lock-fill"></u-input>
				</u-form-item>
				<!-- 按钮 -->
				<u-form-item >

						<u-button type="primary" @click="login">登录</u-button>
						<u-button type="info" @click="ResetloginForm">重置</u-button>

				</u-form-item>
			</u-form>
		</view>
	</view>
	
</template>

<script>
	// import { create_token } from '@/static/JS/jswt.js'

	export default{
		data(){
			return{
				errorType: 'message',
				// 表单数据绑定
				loginForm:{
					username:'',
					password:'thy963852741'
				},
				// 表单验证规则
				rules:{
					 username:[{
						required:true,
						message:'请输入登录名称',
						trigger:'blur',
					},{
						min:3,
						max:10,
						message:'长度在3到10个字符之间',
						trigger:'blur',
					}],
					password:[{
						required:true,
						message:'请输入密码',
						trigger:'blur',
					},{
						min:6,
						max:15,
						message:'长度在6到15个字符之间',
						trigger:'blur',
					}]
 
				},

			}
		},
		methods:{
			// a(){
			// 	const todo = uniCloud.importObject('todo')
			// 	const res =  todo.add()
			// 	console.log(res)
			// }
			// ,
			ResetloginForm(){
				this.$refs.uForm.resetFields();
			},
			login()
			{
				const todo = uniCloud.importObject('todo')
				
				
			
				this.$refs.uForm.validate().then(async res=>{
					const a = this.loginForm.username
					
					const { userQuery:{data:admin_data1}} = await todo.search(a)
					
					const admin_data = await todo.search(a)
					// 数据的姓名 密码 id
					console.log(admin_data1[0])
					// 返回的全部数据
					// console.log(admin_data1)
					
					if( admin_data1[0])
					{
						// console.log(this.loginForm.username)
						const token = todo.create_token(admin_data1[0])
						// console.log(token)
						admin_data1.token = token
						const meta={
							"msg":'登录成功',
							"status":200
						}
						admin_data1.meta = meta
						console.log(admin_data1)
						window.sessionStorage.setItem("token",admin_data1.token)
						this.$router.push('/pages/Home/Home')
						//登录信息已经弄完了，下面还差个不存在用户的提示
						//数据库检索不到东西的时候返回一个 meta.status为400的值来判断这里没写所以toast没出来

						
					}else{
						
						//找不到账号返回的信息提示
						const meta={
							"msg":'登录失败',
							"status":400
						}
						
						
						admin_data1.meta = meta
						this.toast_error()
						
					}
					

					
				})
			}
			,
			
			toast_error()
			{
				 this.$refs.uNotify.show({
				            type: 'error',
				            color: 'white',
				            bgColor: 'red',
				            message: '登录失败',
				            duration: 1000 * 3,
				            fontSize: 20,
				            safeAreaInsetTop:true
				        })
			},
			

		
		}

	}
</script>

<style lang="less" scoped>
	
	.login_container{
		background-color: #2b4b6b;
		height: 100%;
	}
	uni-page-body {  

	    height: 100%;  

	}
	.login_box{
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50% );
		
		.avatar_box{
			height: 130px;
			width: 130px;
			border: 1px solid #eee;
			border-radius: 50%;
			padding:10px;
			box-shadow: 0 0 10px #ddd;
			background-color: #eee;
			position: absolute;
			left: 50%;
			transform: translate(-50%,-50%);
			img{
				width: 100%;
				height: 100%;
				border-radius: 50%;
				background-color: #eee;
			}
		}
		
	}

	.btns{
		display: flex;
		justify-content: flex-end;
		float: right;
	}
	.login_form_{
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 20px 50px 20px ;
		box-sizing: border-box;
	}
</style>