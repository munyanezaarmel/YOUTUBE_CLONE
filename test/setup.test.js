process.env.NODE_ENV = 'test';
const blogs = require('../models/BLOGS');
const login = require('../models/LOGIN')
const signup = require('../models/SIGNUP')
const profile=require('../models/PROFILE')
const contact=require('../models/CONTACT')
beforeEach((done) => { 
    blogs.deleteMany({}, function(err) {});
    login.deleteMany({}, function(err) {});
    signup.deleteMany({}, function(err) {});
    profile.deleteMany({}, function(err) {});
    contact.deleteMany({}, function(err) {});

    done();
});

afterEach((done) => {
    blogs.deleteMany({}, function(err) {});
    login.deleteMany({}, function(err) {});
    signup.deleteMany({}, function(err) {});
    profile.deleteMany({}, function(err) {});
    contact.deleteMany({}, function(err) {});
    done();
});