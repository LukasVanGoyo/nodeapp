var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors')
var app = express();
var multer = require('multer')
const { v4: uuidv4 } = require('uuid');

var users = require('./routes/users');
var products = require('./routes/products.js');
var recipes = require('./routes/recipes.js');
var questions = require('./routes/questions.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
	origin: true,
	methods: ['GET', 'POST'],

}))

// Have Node serve the files for our built React app

app.use(express.static(path.join(__dirname, '../client/build')))

// Handle GET requests to /api route
const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});



app.post('/api/add/photo', upload.single('image'), (req, res, next) => {
	res.json({data: req.file})
})






app.use("/api", products);
app.use("/api", recipes);
app.use("/api", questions);



app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
// All other GET requests not handled before will return our React app
//app.get('*', (req, res) => {
 // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//});


const ConnectionURL = "mongodb+srv://lukasvangoyo:lukas123@cluster0.zclxj.mongodb.net/farmerdb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3003;

mongoose.connect(ConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));