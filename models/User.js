const mongoose = require("mongoose");

constUserSchema = new mongoose.Schima({
  username: {
    type: String,
    required:true,
    min: 3,
    max: 25,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 50,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
    max: 70,
  },
  desc: {
    type: String,
    max: 70,
  },
  city: {
    type: String,
    max: 50,
  },
},

{ timestanps: true }

);