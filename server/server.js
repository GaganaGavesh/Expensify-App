const path = require('path');
const express = require('express');//this is the node way to import something
const { O_DIRECTORY } = require('constants');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');//public path eka set karanawa methana indan tyna
//'..' kiyanne ekak eliyata kiyana eka
const port = process.env.PORT || 3000;//environment variables wala PORT ekata heroku eka set karanawa port num ekak

app.use(express.static(publicPath));//customise the server ,now it serves up all in the public directory

//Cannot GET /edit/f00c4846-105d-4fda-bae6-3d0995e0f50e
//Cannot GET /help
app.get('*', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html')); // ena req ekata response eka widiyata index.html eka yawanawa
});//meka allow karanawa function ekak run karanna, kauru hari server ekata get request ekak kalama
//'*' to match all unhandled paths

// app.listen(3000, () => {//3000 heroku danawa nam hariyanne ne, heroku eka dynamic nissa meka wenas karanna ona
//     console.log('Server is up !');
// });//port we load this, me function eka wada karanawa server eka up una gaman

app.listen(port, () => {//heroku eken dana port ekata thama listen karan inne
    console.log('Server is up !');
});

// 1) create express applicationCache
// 2) tell it use public directory
// 3) hey when some one ask for something give them indexedDB.html

//heroku eka balanawa start kiyala ekak tynawada kiyala package.json ekee
//ilangata eketa adala command eka thama run karannee