//app/routes.js

//=====================
//Home Page (with login links)
//=======================

app.get('/', function(req,res) {
    res.render('index.ejs'); //load the index.ejs file
});


//=====================
//Login
//=======================
//show the login form

app.get('/login', function(req, res) {

    //render the page and pass in any flash data if it exists

    res.render('login.ejs', {message: req.flash('loginMessage') });
});


//process the login form
//app.post('/login', do all our passport stuff here);

//=====================
//Signup
//=======================
//show the signup form

app.get('/signup', function(req, res) {

    //render the page and pass in any flash data if it exists
    res.render('signup.ejs', {message: req.flash('singupMessage') });
});


//process the singup form
//app.post('/signup', do all our passport stuff here);

//=====================
//Profile section
//=======================
//we will want this protected so you have to be logged in to visit
//we will use route middleware to verify this (the isLoggedIn function)

app.get('/profile', isLoggedIn, function(req,res) {
    res.render('profile.ejs', {
        user : req.user // get the user of our session and pass to template
    });
});

//=====================
//Logout
//=======================

app.get('/logout', function(req,res) {
    req.logout();
    res.redirect('/');
});

//route middleware to make sure a user is logged in

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on

    if (req.isAuthenticated())

        return next();
    //if they aren't redirect them to the home page
    res.redirect('/');
}

