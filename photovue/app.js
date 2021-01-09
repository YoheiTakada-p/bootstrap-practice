var navbar = Vue.component('Navbar', {
  template: '<h1>Navbar</h1>'
})

var app = new Vue({
  el: '#app',
  components: {
    'Navbar': navbar
  }
})
