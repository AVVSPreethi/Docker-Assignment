const express = require('express');
var mongo = require('mongodb').MongoClient;
const app = express();

const port = 3000;
const cors = require('cors');
app.use(cors());
var url = "mongodb://root:example@mongo:27017";
let db, users;
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("preethi_db");
    users = db.collection("preethi_collection");
  }
)
app.use(express.json());

app.get("/users", (req, res) => {
  users.find().toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ users: items })
  })
});

app.listen(port, () => console.log(`Server is listening at port: ${port}`));