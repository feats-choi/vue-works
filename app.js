Vue.component('hello-world', {
  template: '<div>Hello World</div>'
});

new Vue({
  el: '#app',
  render: h => h('hello-world')
});