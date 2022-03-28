const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Superadmin", "Business Developer"],
    default: "Business Developer",
  },
  status: {
    type: String,
    default: "In Active",
  },
});
module.exports = mongoose.model("user", userSchema);
