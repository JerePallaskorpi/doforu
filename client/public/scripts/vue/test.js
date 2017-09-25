new Vue({
  el: "#loginBox",
  data: {
    todos: [],
    errors: ""
  },

  methods: {
    onSubmit() {
      axios.post("/login", this.data)
        .then(response => this.todos = response.data)
        .catch(alert("lol"));
    }
  },

  mounted() {



  }
});
