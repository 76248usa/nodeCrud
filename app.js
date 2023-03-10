const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();



// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);
app.get('/hello', (req,res) => {
    res.send('Task manager app')
})
const port = process.env.PORT || 3000;
const start = async () => {
 
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
   
    //console.log(error);
  
};

start();



