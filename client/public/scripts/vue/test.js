new Vue({
  el: "#bottomContainer",
  data: {
    todos: [],
    errors: ""
  },

  methods: {
    getData() {
      axios.post("/todos", this.data)
        .then(response => this.todos = response.data);
    }
  },

  mounted() {



  }
});

new Vue({
  el: "#registerBox",
  data: {
    provider: false
  },

  methods: {
    isChecked() {
      if (event.target.checked) {
        this.provider = true;
      } else {
        this.provider = false;
      }
    }
  }
});
