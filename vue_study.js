


new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!Hello Vue Hello Vue Hello Vue'
  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})



var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})



new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})



new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})




<!-- //数据由new Vue 关联给div 再传给组件进行填充 -->
<!-- 1.new Vue用来提供数据  -->
<!-- 2.Vue.component用来提供UI模板 -->

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})


<!-- -----------------//$符合用来直接寻找vue实例的属性----------------------------------------- -->
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data <!-- // => true -->
vm.$el === document.getElementById('example') <!--// => true -->

<!--// $watch 是一个实例方法-->
vm.$watch('a', function (newValue, oldValue) {
 <!--// 这个回调将在 `vm.a` 改变后调用-->
})
<!-- --------------------------------------------------------- -->
new Vue({
  data: {
    a: 1
  },
  created: function () {
    <!--// `this` 指向 vm 实例-->
    console.log('a is: ' + this.a)
  },
   <!--//不要在选项属性或回调上使用箭头函数 this不指向vue对象-->
  created: () => console.log(this.a)
})

<!-- --------------------------------------------------------- -->
<!-- //提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit">...</form>

<!-- //只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
<!-- --------------------------------------------------------- -->
new Vue({
  el: '#app-8',
  data: {
    message: 'Hello'
  },
  computed: {
    <!--// 计算属性的 getter -->
    reversedMessage: function () {
      <!--// `this` 指向 vm 实例 -->
      return this.message.split('').reverse().join('')
    }
  }
})