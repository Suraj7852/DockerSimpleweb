const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('How are you');
});

app.listen(8080, () => {
    console.log('listening to port 8080')
})