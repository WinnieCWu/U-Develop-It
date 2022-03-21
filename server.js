const db = require('./db/connection');
const express = require('express');
// const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Can remove it from individual route expression
//With /api prefix here, don't need to specify index.js bc if it's in the director, Node will look for it auto
app.use('/api', apiRoutes);

//Default/catch-all response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
//place at the bottom, to start Express.js server on port 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); 