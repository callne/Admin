import {RouterMount,createRouter} from '@/js_sdk/hhyang-uni-simple-router/uni-simple-router.js';
// import Login from '../../pages/Login/Login'
// import Home from '../../pages/Home/Home'
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});
//全局路由前置守卫
// router.beforeEach((to, from, next) => {

// 	if(to.path === '/pages/Login/Login') return next()

	
// 	const tokenStr = window.sessionStorage.getItem('token')
// 	if(!tokenStr) return next('/pages/Login/Login')
// 	//if为false 时走 next() 因为此时token有东西
// 	next()
	
// });
// 全局路由后置守卫

export {
	router,
	RouterMount
}