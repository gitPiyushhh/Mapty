const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);



// Connecting to Database
mongoose
  .connect(DB)
  .then(() => {
    console.log('Successfully Connected to Database');
  });

// Starting Dev server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running at ${port}`);
});
