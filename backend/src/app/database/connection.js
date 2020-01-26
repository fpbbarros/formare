const mongoose = require('mongoose');

try {

  mongoose.connect('mongodb+srv://fabio:fabio@fabio-jecej.mongodb.net/Auth?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

} catch (error) {
  console.log(error);
}

mongoose.Promise = global.Promise;
module.exports = mongoose;