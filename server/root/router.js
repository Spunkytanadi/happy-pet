const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/",(req,res)=>{
    console.log(req.body)
    const user = User(req.body)
    user.save()
    res.send(req.body)
})

router.get('/login', (req, res, next) => {
    if (err) return next(err);

    if (!user) {
        return res.redirect('user/login');
    } else {
        user.checkPassword(password, (err, result) => {
            if (err) return next(err);
            if (!result) {
                console.log('invalid password');
                res.redirect('user/login');
            } else {
                res.send('Login Successfull')
            }
        });
    }
});

// Register Page
router.get('/signup', (req, res, next) => {
    res.render('signup');
})

// Register Handle
router.post('/signup', (req, res, next) => {
    const { name, email, password } = req.body;

    // Check required fields
    if(!name || !email || !password){
        errors.push({ msg: 'Please fill in all fields'})
    }

    // Check password length
    if(password.length < 12) {
        errors.push({ msg: 'Password should be at least 12 characters long' });
    }

    if(errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password
        })
    } else {
        // Passed Validation
        User.findOne({ email: email })
            .then(user => {
                if(user) {
                    // User exists
                    errors.push({ msg: 'Email already registered' });
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password
                    })
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    
                    console.log(newUser)
                    res.redirect('user/login');
                }
            })
    }
})

router.get('/profile', (res, req) => {
    res.render('profile')
})

router.post('/share', (res, req) => {
    const { text, picture } = req.body

    
})

module.exports = router