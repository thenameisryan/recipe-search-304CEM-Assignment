const mongoose = require('mongoose');
const db = 'mongodb+srv://Ryan:usela123@cluster0-nulzf.mongodb.net/RecipeDb?retryWrites=true&w=majority';

//Connect to MongoDB database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Error connecting to database: ', error);
  });


const searchSchema = mongoose.Schema({
  search : {type: String},
})

const search = mongoose.model('SearchHistory', searchSchema, 'SearchHistory');

module.exports.search = search;
