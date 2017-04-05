// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routers from './router'
import stores from './store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.alert = function(content){
	var body = document.querySelector("body");
	var box = document.querySelector("box-alert");
	if(box){
		box.style.display = "block";
	}else{
		var alert = document.createElement('div');
		alert.className = "box-alert";
		body.appendChild(alert);
		alert.innerHTML = '<p class="alert-cont">' + content + '</p>'
	}
}
const router = new VueRouter(routers)
const store = new Vuex.Store(stores)

import dropDown from './components/dropdown/dropdown.vue' 
import horizan from './components/horizan/horizan.vue' 
// 注册全局组件
const plugin = {
	install (Vue){
		Vue.component('drop-down',dropDown)
		Vue.component('horizan',horizan)
		Vue.directive('setcolor',{
			bind (e,binding,vnode){
				e.style.color= binding.value.color
			}
		})
	}
}
Vue.use(plugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
var ap = new Vue({
	template: '<App></App>',
    el: '#app',
    router,
    store, 
    components: { App }
})

router.afterEach(route => {
  
})

router.beforeEach((to, from, next) => {
  if(next)next()
})
