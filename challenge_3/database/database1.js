const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("We are connected");
});
let rinfoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: { type: String, trim: true, unique: true },
  email: { type: String, trim: true, unique: true },
  password: { type: String, trim: true, unique: true },
  line1: { type: String, trim: true, unique: true },
  line2: { type: String, trim: true, unique: true },
  city: { type: String, trim: true, unique: true },
  state: { type: String, trim: true, unique: true },
  zipcode: { type: String, trim: true, unique: true },
  creditcard: { type: String, trim: true, unique: true },
  expiryDate: { type: String, trim: true, unique: true },
  CVV: { type: String, trim: true, unique: true },
  billingZIPcode: { type: String, trim: true, unique: true }
});

let Info = mongoose.model("Info", repoSchema);
