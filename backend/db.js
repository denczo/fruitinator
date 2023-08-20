
const mongoose = require("mongoose");

class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb+srv://fruitlover:hU5ime8QmEQDGPcs@clusterfruitinator.othe67z.mongodb.net/`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

module.exports = new Database();