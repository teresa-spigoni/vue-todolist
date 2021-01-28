new Vue({
  el: '#root',
  data: {
    listItems: '',
    array: []
  },
  methods: {
    submit: function () {
      if (this.listItems === '') {
        alert('Enter a new todo');
      } else {
        this.array.push(this.listItems);
        this.listItems = '';
      }
    },
    deleteItem: function (index) {
      this.array.splice(index, 1);
    }
  }
});
Vue.config.devtools = true;
