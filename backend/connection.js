const mongoose = require('mongoose');

const url = `mongodb+srv://sheetal:sheetal13@cluster0.gaj4j19.mongodb.net/myDBmern9302023?retryWrites=true&w=majority`
mongoose.connect(url)
.then((result) => {
    console.log('server connected');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports= mongoose