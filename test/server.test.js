
  const chai = require('chai');
  const expect = chai.expect;
  const chaiHttp = require('chai-http');
  const server = require('../server');
  chai.use(chaiHttp);
describe('User workflow tests', () => {
  it('should register + login a user, create product and verify 1 in DB', function(done){
    this.timeout(30000);
// 1) Register new user
let user = {
username: "munyaneza",
email: "munyaarmel61@gmail.com",
password: "123456"
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(200);   
expect(res.body).to.be.a('object');
//expect(res.body.error).to.be.equal(null);
// 2) Login the user
chai.request(server)
.post('/api/user/login')
.send({
"email": "munyaarmel61@gmail.com",
"password": "123456"
})
.end((err, res) => {
// Asserts  
expect(res.body).to.be.a('object');                      
expect(res.status).to.be.equal(200);                       
let token = res.body.token;
// 3) Create new blog
let blogs =
{
title: "title blog",
description: "blog description",
img: "image"
};
chai.request(server)
.post('/blogs')
.set({ "auth-token": token })
.send(blogs)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(201);                                
expect(res.body).to.be.a('object');
let savedBlogs = res.body;
expect(savedBlogs.title).to.be.equal(blogs.title);
expect(savedBlogs.description).to.be.equal(blogs.description);
expect(savedBlogs.img).to.be.equal(blogs.img);

// 4) Verify one product in test DB
chai.request(server)
    .get('/blogs')
    .end((err, res) => {
        // Asserts
       expect(res.status).to.be.equal(200);                                
        expect(res.body).to.be.a('object');                                
       done();
                 });
          });
  });
});
});
  it('check blog DB', function(done){
    this.timeout(30000);
// 1) Register new user
let user = {
username: "munyaneza",
email: "munyaarmel61@gmail.com",
password: "123456"
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(200);   
expect(res.body).to.be.a('object');
//expect(res.body.error).to.be.equal(null);
// 2) Login the user
chai.request(server)
.post('/api/user/login')
.send({
"email": "munyaarmel61@gmail.com",
"password": "123456"
})
.end((err, res) =>{
// Asserts  
expect(res.body).to.be.a('object');                      
expect(res.status).to.be.equal(200);                       
let token = res.body.token;
// 3) Create new blog
let blogs =
{
title: "title blog",
description: "blog description",
img: "image"
};
chai.request(server)
.post('/blogs')
.set({ "auth-token": token })
.send(blogs)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(201);                                
expect(res.body).to.be.a('object');
let savedBlogs = res.body;
expect(savedBlogs.title).to.be.equal(blogs.title);
expect(savedBlogs.description).to.be.equal(blogs.description);
expect(savedBlogs.img).to.be.equal(blogs.img);

// 4) Verify one product in test DB
chai.request(server)
    .get('/blogs')
    .end((err, res) => {
        // Asserts
       expect(res.status).to.be.equal(200);                                
        expect(res.body).to.be.a('object');                                
       done();
                 });
          });
  });
});
});
it('should register + login a user, create blog and delete it from DB',function(done){
  this.timeout(30000);
// 1) Register new user
let user = {
username: "armel70",
email: "munyaarmel61@gmail.com",
password: "123456"
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(200);   
expect(res.body).to.be.a('object');
// 2) Login the user
chai.request(server)
.post('/api/user/login')
.send({
    "email": "munyaarmel61@gmail.com",
    "password": "123456"
})
.end((err, res) => {
    // Asserts                        
    expect(res.status).to.be.equal(200);                                                
    let token = res.body.token;
    // 3) Create new product
   let blogs =
    {
        title: "blog title",
        description: "Test blogs Description",
        img: 'image title'
   };

    chai.request(server)
.post('/blogs')
.set({ "auth-token": token })
.send(blogs)
.end((err, res) => {

// Asserts
expect(res.status).to.be.equal(201);                                
expect(res.body).to.be.a('object');

let savedBlogs = res.body;
expect(savedBlogs.title).to.be.equal(blogs.title);
expect(savedBlogs.description).to.be.equal(blogs.description);
expect(savedBlogs.img).to.be.equal(blogs.img);
// 4) Delete product
chai.request(server)
    .delete('/blogs/' + savedBlogs._id)
    .set({ "auth-token": token })
    .end((err, res) => {
        // Asserts
        expect(res.status).to.be.equal(200);                                               
        done();
    });
});
});
});
});

// same
it('should register + login a user, create blog and update user ',function(done){
  this.timeout(30000);
// 1) Register new user
let user = {
username: "armel70",
email: "munyaarmel61@gmail.com",
password: "123456"
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(200);   
expect(res.body).to.be.a('object');
// 2) Login the user
chai.request(server)
.post('/api/user/login')
.send({
    "email": "munyaarmel61@gmail.com",
    "password": "123456"
})
.end((err, res) => {
    // Asserts                        
    expect(res.status).to.be.equal(200);                                                
    let token = res.body.token;
    // 3) Create new product
   let blogs =
    {
        title: "blog title",
        description: "Test blogs Description",
        img: 'image title'
   };

    chai.request(server)
.post('/blogs')
.set({ "auth-token": token })
.send(blogs)
.end((err, res) => {

// Asserts
expect(res.status).to.be.equal(201);                                
expect(res.body).to.be.a('object');

let savedBlogs = res.body;
expect(savedBlogs.title).to.be.equal(blogs.title);
expect(savedBlogs.description).to.be.equal(blogs.description);
expect(savedBlogs.img).to.be.equal(blogs.img);
// 4) Delete product
chai.request(server)
    .put('/blogs/' + savedBlogs._id)
    .set({ "auth-token": token })
    .end((err, res) => {
        // Asserts
        expect(res.status).to.be.equal(201);                                               
        done();
    });
});
});
});
});

it('should register user with invalid input',function(done){
  this.timeout(30000);
//1) Register new user with invalid inputs
let user = {
username: "armel",
email: "munyaarmel61@gmail.com",
password: "123" //Faulty password - Joi/validation should catch this...
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
                
// Asserts
expect(res.status).to.be.equal(400);
expect(res.body).to.be.a('object');
//expect(res.body.error).to.be.equal("\"password\" length must be at least 6 characters long");  
done();              
});
});
it('should login user with invalid input',function(done){
  this.timeout(30000);
// 1) Register new user with invalid inputs
let user = {
email: "munyaarmel61@gmail.com",
password: "123"
}
chai.request(server)
.post('/api/user/login')
.send(user)
.end((err, res) => {         
// Asserts
expect(res.status).to.be.equal(400);
expect(res.body).to.be.a('object');
//expect(res.body.error).to.be.equal("\"password\" length must be at least 6 characters long");  
done();              
});
});
it('should register + login a user, create product and comment on blog', function(done){
  this.timeout(30000);
// 1) Register new user
let user = {
username: "munyaneza",
email: "munyaarmel61@gmail.com",
password: "123456"
}
chai.request(server)
.post('/api/user/register')
.send(user)
.end((err, res) => {
// Asserts
expect(res.status).to.be.equal(200);   
expect(res.body).to.be.a('object');
//expect(res.body.error).to.be.equal(null);
// 2) Login the user
chai.request(server)
.post('/api/user/login')
.send({
"email": "munyaarmel61@gmail.com",
"password": "123456"
})
.end((err, res) => {
  
// Asserts  
expect(res.body).to.be.a('object');                      
expect(res.status).to.be.equal(200);                       
let token = res.body.token;
// 3) Create new blog
let comment =
{
like: "like",
comment: "comment"
};
chai.request(server)
.post('/comment')
.set({ "auth-token": token })
.send(comment)
.end((err, res) => {
// Asserts                              
expect(res.body).to.be.a('object');
let savedComment = res.body;
expect(savedComment.like).to.be.equal(comment.like);
expect(savedComment.comment).to.be.equal(comment.comment);
console.log("ok",savedComment)
// 4) Verify one product in test DB
chai.request(server)
  .get('/comment')
  .end((err, res) => {
      // Asserts
    // expect(res.status).to.be.equal(200);                                
      expect(res.body).to.be.a('array');                                
     done();
               });
        });
});
});
});
});