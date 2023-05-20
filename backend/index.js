// import express
const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const shopRouter = require('./routers/shopRouter');
const flowerRouter = require('./routers/flowerRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/shop', shopRouter);
app.use('/flower', flowerRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    res.send('Working fine');
});

app.get('/home', (req, res) => {
    res.send('Response from home');
})

// add
// delete


app.listen( port, () => { console.log('server started') } );