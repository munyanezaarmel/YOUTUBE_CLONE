process.env.NODE_ENV = 'test';

const blogs = require('../models/BLOGS');
const login = require('../models/LOGIN');
const signup = require('../models/SIGNUP');

//clean up the database before and after each test
beforeEach((done) => { 
    blogs.deleteMany({}, function(err) {});
    login.deleteMany({}, function(err) {});
    signup.deleteMany({}, function(err) {});
    done();
});

afterEach((done) => {
    blogs.deleteMany({}, function(err) {});
    login.deleteMany({}, function(err) {});
    signup.deleteMany({}, function(err) {});
    done();
});