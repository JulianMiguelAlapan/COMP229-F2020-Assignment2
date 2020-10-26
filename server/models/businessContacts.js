let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let BusinessChontactsSchema = new Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'businessContacts'
});

module.exports.Model = Model('BusinessContacts', BusinessContactsSchema);