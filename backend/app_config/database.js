const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI, {
      keepAlive: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = dbConnection;
