const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


// view engine
const app = express();
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// connecting to static folder
app.use(express.static('static'));
// connection the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ##########################################################################
// Home
app.get('/', (req, res) => {
	res.render('index');
});

// About
app.get('/about', (req, res) => {
	res.render('about');
});

// Contact us
app.get('/contact', (req, res) => {
	res.render('contact');
});

// Services
app.get('/services', (req, res) => {
	res.render('services');
});


//* Running the server *//
const PORT = process.env.PORT || 5000;
// host = '192.168.43.205';
// host = '192.168.42.130';


app.listen(PORT, () => {
	console.log(`server is running successfuly.\nport: ${PORT}`);
});
