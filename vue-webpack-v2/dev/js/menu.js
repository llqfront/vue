define(function(require, exports, module) {
    var Vue = require('vue')
    var P = {
        _init:function(){
            P.render()
        },
        render:function(){
            // var data = {
            //     "test":'这是菜单这是不变的'
            // }
            var vm = new Vue({
                el:'#menu',
                components:{
                    'my-parent':require('../components/menu.vue')
                    //     data:function(){
                    //         // return{
                    //         //     msg1:data.test
                    //         // }
                    //         require('../components/menu.vue').template
                    //     },
                    //     // template:`
                    //     //     <h1>模板=>{{msg1}}</h1>
                    //     //     <bbb></bbb>
                    //     //     <bbb :m='msg1'></bbb>  
                    //     // `,
                    //     template:require('../components/menu.vue').template,
                    //     components:{
                    //         'bbb':{
                    //              props:['m'],       //这是一种写法，props以数组的形式定义属性
                    //             // props:{
                    //             //     'm':String           //这是第二种写法，对象的形式
                    //             // },
                    //             template:'<h3>这是子组件bbb--{{m}}</h3>'
                    //         }
                    //     }
                    // }
                }
            })
        }
    }
    module.exports = {
        init:P._init
    }
})