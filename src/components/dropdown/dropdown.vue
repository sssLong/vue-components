<template>
	<drop-box class="drop">
		<div class="drop-son" @click="show = !show"><span>{{now}}</span><i></i></div>
		<drop-list class="drop-list" v-show="show">
			<drop-item v-for='(item,index) in nav' :key='item' :item='item' v-on:setList='getList(item,index)' :class='[index==nowIndex?"active":""]'></drop-item>
		</drop-list>	
	</drop-box>
</template>
<script type="text/javascript">
import dropBox from './drop-box.vue'
import dropList from './drop-list.vue'
import dropItem from './drop-item.vue'
export default{
	data(){
		return {
			nowIndex:0,
			now:"体育",
			nav:[],
			show:false
		}
	},
	created(){
		this.nav = ["体育","数学","语文"]
	},
	methods:{
		getList(item,index){
			this.now = item;
			this.show = !this.show;
			this.nowIndex = index;
		}
	},
	components:{
		dropBox,
		dropList,
		dropItem
	}
}
</script>
<style>
.drop{
    width:200px;    
    border:1px solid #333;
    position: relative;
}
.drop-son{
    height:100%;
    height:20px;
    line-height: 20px;
    text-indent: 15px;
}

.drop-son i{
    display: inline-block;
    float:right;
    border-left:6px solid transparent;
    border-right:6px solid transparent;
    border-top:6px solid #666;
    margin:7px 7px 0 0;
}
.drop-list{
    position: absolute;
    left:-1px;
    top:20px;
    border:1px solid #333;
    width:200px;
}
.drop-list .active{
    background: orange;
    color:#fff;
}
.drop-list li{
    height:20px;
    line-height: 20px;
    color:#000;
    text-indent: 15px;
}
</style>