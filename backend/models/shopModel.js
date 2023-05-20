const {Schema,model,Types} = require('../connection');

const myschema=new Schema({
    title : String,
    owner : String,
    address : String,
    coverimage: String,
    createdAt: Date,
    
});
module.exports = model('shop',myschema);