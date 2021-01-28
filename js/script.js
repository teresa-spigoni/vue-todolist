new Vue({
  el: '#root',
  data: {
    listItems: '',
    array: []
  },
  methods: {
    submit: function () {
      this.array.push(this.listItems);
      this.listItems = '';
    },
    deleteItem: function (index) {
      this.array.splice(index, 1);
    }
  }
});
Vue.config.devtools = true;
