
const mongoose = require("mongoose")

class Database {
  constructor() {
    this._connect();
  }
  
  _connect() {
    mongoose
      .connect(`mongodb+srv://fruitlover:btBmDaJBdCVFGtu0@clusterfruitinator.mc1wpgi.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFruitinator`)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch((err) => {
        console.error('Database connection failed')
      });
  }
}

module.exports = new Database()