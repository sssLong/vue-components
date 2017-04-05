<template>
	<li @click="setList(item)">{{item}}</li>
</template>
<script type="text/javascript">
export default{
	props:['item'],
	methods:{
		setList(item){
			this.$emit('setList');
		}
	}
}
</script>