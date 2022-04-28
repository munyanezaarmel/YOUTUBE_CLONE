  const chai = require('chai');
  const expect = chai.expect;
  const chaiHttp = require('chai-http');
  const server = require('../server');
  chai.use(chaiHttp);
  describe('/testing all routes',()=>{
    it.skip('test all blogs route',function(done){
      this.timeout(10000);
        chai.request(server)
        .get('/blogs')
        .end((err, res)=>{
          expect(res.status).to.be.equal(200)
          expect(res.body).to.be.a('object'); 
            done();
        })
    })
    it.skip('posting a blog should be in form of object ',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/blogs')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
          expect(res.status).to.be.equal(201)
            done();
        })
    })
    it.skip('deleted blog should return an object',function(done){
      this.timeout(10000);
        chai.request(server)
        .delete('/blogs')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
          expect(res.status).to.be.equal(200)
            done();
        })
    })
    it.skip('updated blog should be in form of object',function(done){
      this.timeout(10000);
        chai.request(server)
        .patch('/blogs')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
          expect(res.status).to.be.equal(201)
            done();
        })
    })
    it('test all returned messages must be an object',function(done){
          this.timeout(10000);
        chai.request(server)
        .get('/contact')
        .end((err, res)=>{
          expect(res.body).to.be.a('array');
            done();
        })
    })
    it('all tested message should be in form of objrct',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/contact')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
            done();
        })
    })
    it('all tested message should be in form of objrct',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/profile')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
            done();
        })
    })
    it('all tested message should be in form of objrct',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/user/register')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
            done();
        })
    })
    it('credential email, username, and password should be in form of object',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/user/login')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
            done();
        })
    })
    it('comment and likes should be in form of object',function(done){
      this.timeout(10000);
        chai.request(server)
        .post('/comment')
        .end((err, res)=>{
          expect(res.body).to.be.a('object');
            done();
        })
    })
    
  })  
  