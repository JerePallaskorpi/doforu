const app = new Vue({
  el: "#content",
  data: {
    loginBox: "hidden",
    message: "asddasdas",
    packages: [
      { name: "Node", description: "https://nodejs.org/en/"},
      { name: "Vue", description: "https://vuejs.org/"},
      { name: "Express", description: "https://expressjs.com/"},
      { name: "Stylus", description: "http://stylus-lang.com/"},
      { name: "Jade", description: "https://pugjs.org/api/getting-started.html"},
      { name: "Font", description: "Lato"},
      { name: "Assets", description: "Font Awesome 4"}
    ]
  }
});
