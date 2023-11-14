# lamlam-estate

/*

!!important!! 52:40 if you still got the error do this!!

- npm init -y
- node api/index.js
- npm i nodemon
- edit the package.json
 "description": "",
  "main": "index.js",
  "type": "module"

     "scripts": {
    "dev": "nodemon api/index.js",
    "start": "node api/index.js"
  },

- npm i mongoose 
- npm i dotenv
- add .env on gitignore to ignore on commit to github
- create folder models -> then file user.model.js create schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

- create functionality sign up
- npm i bryptjs
- create functionality sign in
- npm i jsonwebtoken 

**- REDUX TOOLKIT -**
- npm i @reduxjs/toolkit react-redux
- create redux folder -> store.js file
- redux folder -> folder user -> userSlice.js file

- npm i redux-persist

- npm i firebase
- 3:00 for google oauth guide and codes

******asdsa****asdsadas
*/