new Vue({
  el: '#root',
  data: {
    listItems: '',
    array: []
  },
  methods: {
    capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    },
    submit: function () {
      if (this.listItems === '') {
        alert('Enter a new todo');
      } else {
        this.array.push(this.capitalize(this.listItems));
        this.listItems = '';
      }
    },
    deleteItem: function (index) {
      this.array.splice(index, 1);
    }
  }
});
Vue.config.devtools = true;
