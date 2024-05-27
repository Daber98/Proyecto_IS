const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://daber:12345@cluster0.ttmkbgx.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;