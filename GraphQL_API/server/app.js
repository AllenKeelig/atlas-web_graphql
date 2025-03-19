const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); 
const mongoose = require('mongoose');
const app = express();
const Task = require('../models/task');
const Project = require('../models/project');

mongoose
  .connect('mongodb+srv://allenkeeling:MXbnmtdVM23sKK2M@cluster0.2kxxf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));
  mongoose.connection.once(’open’, () =>
  console.log(’connected to database’);
);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});
