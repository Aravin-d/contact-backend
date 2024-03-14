const express = require("express");
const dontenv = require("dotenv").config();
const connectDb = require('./config/dbConnection');
connectDb();
const app = express();
const errorHandler = require("./middlewares/erroHandler");
const port = 5000;


var contactRoutes = require('./routes/contactRoutes');
var userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler)


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
