const {Schema,model,Types} = require('../connection');

const myschema=new Schema({
    name : String,
    color : String,
    category : String,
    shop: {type: Types.ObjectId, ref: 'shop'},
    price: Number,
    image: String,
    createdAt: Date,
    
});
module.exports = model('flower',myschema);