const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;  // 

app.get('/get', (req, res) => {
  res.send('Hello World!')
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});

const dotenv = require("dotenv");
const  mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth/auth");
const recipeRoute = require("./routes/recipe/recipes");
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.once('open', function(){
  console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
  console.log(err);
});

app.use(express.json(), cors());

app.use("/api/users", authRoute);
app.use("/api/recipe", recipeRoute);