<template>
	<h1>模板=>{{msg1}}</h1>
	<bbb></bbb>
    <bbb :m='msg1'></bbb>
</template>
<script>
var data = {
	 "test":'这是菜单这是不变的'
}
/** es6
export default {
  data () {
    return{
        msg1:data.test
    }
  }
}
*/
// es5
var obj = { 
    data: function() {
        return {
            msg1:data.test
        }
    },
    components:{
        'bbb':{
             props:['m'],       //这是一种写法，props以数组的形式定义属性
            // props:{
            //     'm':String           //这是第二种写法，对象的形式
            // },
            template:'<h3>这是子组件bbb--{{m}}</h3>'
        }
    }
};
module.exports = obj;
</script>
<style>
	/*style*/
</style>