//const connectionString = 
//'mongodb+srv://elsabe:timechange@nodeexpressprojects.uvgybdg.mongodb.net/TASKMANAGER?//retryWrites=true&w=majority'

const mongoose = require('mongoose');

const connectDB = (url) => {
return mongoose
.connect(url, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: false,
   useUnifiedTopology: true 
})
}
module.exports = connectDB;