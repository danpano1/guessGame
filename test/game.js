process.env.NODE_ENV = "test"

const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const numberCache = require('../utils/numberCache')
const app = require('../app')

chai.use(chaiHttp)

describe("Game", ()=>{
    describe('/POST guess', ()=>{
        it('Should response with status 404 and message "Too low :c" if number is too low', (done)=>{
            const numberToTest = numberCache.getNumber()-1
            body = {number: numberToTest}

            chai.request(app)
                .post('/guess')
                .send(body)
                .end((err, res)=>{
                    res.should.have.status(404)             
                    res.text.should.equal('Too low :c') 
                    done();
                });           
        });
        it('Should response with status 404 and message "Too much :/" if number is too big', (done)=>{
            const numberToTest = numberCache.getNumber()+1
            body = {number: numberToTest}

            chai.request(app)
                .post('/guess')
                .send(body)
                .end((err, res)=>{
                    res.should.have.status(404)             
                    res.text.should.equal('Too much :/') 
                    done();
                });           
        });
        it('Should response with status 200 and message "Nice one, you guessed :)" if number is correct', (done)=>{
            const numberToTest = numberCache.getNumber()
            body = {number: numberToTest}

            chai.request(app)
                .post('/guess')
                .send(body)
                .end((err, res)=>{
                    res.should.have.status(200)             
                    res.text.should.equal('Nice one, you guessed :)')  
                    done();
                });
        });
        it('Should response with status 404 and message "To play game you have to include number in your request body(as JSON)" if body is not correct', (done)=>{
            body = {}

            chai.request(app)
                .post('/guess')
                .send(body)
                .end((err, res)=>{
                    res.should.have.status(404)
                    res.text.should.equal("To play game you have to include number in your request body(as JSON)")       
                    done();
                });                      
        });
        it('Should response with status 404 and message ""Number" must be a number" if body.number is string including letters', (done)=>{
            body = {number: "abcd1"}

            chai.request(app)
                .post('/guess')
                .send(body)
                .end((err, res)=>{
                    res.should.have.status(404)             
                    res.text.should.equal('"Number" must be a number')  
                    done();
                });                      
        });
    });   
})
    
