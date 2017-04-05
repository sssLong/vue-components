<template>
  <div id="app" class="main">
    <div class="main-left">
      <ul>
        <li @click="setActive(index,item)" v-for="(item,index) in nav"><router-link :to="toUrl[index]" v-text='item' :class="[item == now?'active':'']"></router-link></li>
      </ul>
    </div>
    <div class="main-right">
      <div class="compe-name" v-setcolor="{color:'red'}">{{name}}</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
//import Zepto from 'zepto'
export default {
  data (){
    return {
      name:"dropdown"
    }
  },
  computed:{
    ...mapState(['now','nav','toUrl'])
  },
  methods:{
    setActive(index,item){
      this.$store.commit('setNow',item);
      this.name = item;
    }
  },
  created(){
    this.alert("龙远，你好")
    this.$store.commit("setNow",this.$route.path.slice(1)?this.$route.path.slice(1):'dropdown')
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
}
li{
  list-style-type: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:1200px;
  margin:100px auto 0 auto;
}
.main-left{
  float:left;
  padding-top:50px;
}
.main-left ul{

}
.main-left li{
  width:200px;
  height:50px;
  line-height: 50px;
  text-align: center;
  color:#333;
}

.main-left li .active{
  color:red;
}
.main-right{
  float:right;
  width:900px;
}
.compe-name{
  margin-bottom:20px;
}
</style>
