<template>
    <page-box class="page-box">
        <a href="javascript:;" class='prev item' @click='prevPage'>&lt;</a>
        <page-list class="page-list">
            <page v-for='(item,index) in arr' :key='item' :item='item' :index='index' :class="[item==now?'active':'']" v-on:selectPage='getPage' class='item'></page>
        </page-list>
        <a href="javascript:;" class='next item' @click='nextPage'>&gt;</a>
    </page-box>
</template>

<script type="text/javascript">

import pageBox from './page-box.vue'
import pageList from './page-list.vue'
import page from './page.vue'
export default {
    data() {
            return {
                now: 1,
                size: 7,
                allSize: 9,
                min: 0,
                max: 0,
                arr: []
            }
        },
        methods: {
            prevPage(){
                if(this.now == 1)return;
                this.now --;
                this.getPage(0,this.now,true) 
            },
            nextPage(){
                if(this.now == this.allSize)return;
                this.now ++;
                this.getPage(0,this.now,true) 
            },
            getPage(index, item, isPage) {
                if (!isPage) return
                this.now = item;
                this.afterPage(item);
                if(this.allSize <= this.size)return;              
                this.getDate(item);
                
            },
            afterPage(item) {
                console.log(item)
            },
            getDate(index) {
                
                let _arr = [];
                if(index < this.min){
                    this.arr = [];
                    this.initPage();
                    return
                }
                if(index > this.max){
                    this.arr = [];
                    this.maxPage();
                    return;
                }
                for (let i = 0; i < this.size - 2; i++) {
                    
                    _arr.push(+index - (Math.floor(this.size / 2 - 1)) + i);
                    
                }
                this.arr = [1, '...', ..._arr, '...', this.allSize];
            },
            initPage() {
                if (this.allSize > this.size) {
                    for (let i = 1; i <= this.size + 1; i++) {
                        if (i == this.size) {
                            this.arr.push('...');
                        } else if (i == this.size + 1) {
                            this.arr.push(this.allSize);
                        } else {
                            this.arr.push(i);
                        }

                    }
                }
                if (this.allSize <= this.size) {
                    for (let i = 1; i <= this.allSize; i++) {
                        this.arr.push(i);
                    }
                }
            },
            maxPage(){
                if (this.allSize > this.size) {
                    for (let i = 1; i <= this.size + 1; i++) {
                        if (i == 2) {
                            this.arr.push('...');
                        } else if (i == 1) {
                            this.arr.push(i);
                        } else {
                            this.arr.push(this.allSize - this.size - 1 + i);
                        }

                    }
                }
            }
        },
        created() {
            $(".compe-name").css("color","red")
            this.min = Math.ceil(this.size / 2) + 1;
            this.max = this.allSize - Math.ceil(this.size / 2);
            this.initPage();
        },
        components: {
            pageBox,
            pageList,
            page
        }
}
</script>
<style>

.page-box {}
.prev{
    display: block;
    background: #ddd;
    color:#fff;

}
.page-list{
    float:left;
}
.next{
    display: block;
    background: #ddd;
    color:#fff;
}
.page-list:after {
    display: block;
    content: '';
    clear: both;
}

.page-list .active {
    background: orange;
    color: #fff;
}

.item {
    float: left;
    margin-right: 10px;
    border: 1px solid #666;
    color: #000;
    text-align: center;
    width: 35px;
    height: 35px;
    line-height: 35px;
}
</style>
