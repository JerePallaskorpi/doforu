var data = [];
for (var i = 0; i < 5000; i++) {
  data.push([faker.company.catchPhrase(), faker.lorem.sentence(), Math.round(Math.random() * (1000 - 1) + 1), 5]);
}

// Query for database
let q = "INSERT INTO service (name, description, price, provider_id) VALUES ?";


// Run query on database
sqlConnection.query(q, [data], (error, results) => {
  if (error) throw error;
  res.redirect("back");
});
