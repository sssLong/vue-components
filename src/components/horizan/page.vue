<template>
	<li @click='selectPage(index,item)'>{{item}}</li>
</template>
<script type="text/javascript">
export default{
	props: ['item','index'],
	methods:{
		selectPage(index,item){
			var isPage = true;
			if(item === "...")isPage=false;
			this.$emit('selectPage',index,item,isPage);
		}
	}
}
</script>