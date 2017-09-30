new Vue({
  el: "#registerBox",
  data: {
    provider: false,
    companyName: "",
    companyId: "",
    loading: false,
    errors: []
  },

  methods: {
    isChecked() {
      if (event.target.checked) {
        this.provider = true;
      } else {
        this.provider = false;
      }
    },
    getYtunnus() {

      this.loading = true;
      this.companyName = "";

      axios.get("https://avoindata.prh.fi/tr/v1/" + this.companyId, this.data)
        .then(response => {
          this.companyName = response.data.results[0].name;
          console.log(response);
          this.loading = false;
        })
        .catch(error => {     
          this.errors.push(error);
          this.loading = false;
        });
    }
/*    registerUser() {
      axios.post("/register").then
    }*/
  }
});

new Vue({
  el: "#editServiceCard",
  data: {
    serviceName: "",
    serviceDescription: "",
    servicePrice: ""
  },

  computed: {
    getCardData() {
      axios.get("edit/getCardData")
      .then(response => {
        this.serviceName = response.data.name;
        this.serviceDescription = response.data.description;
        this.servicePrice = response.data.price;
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
});
