const chai = require('chai');
const jsdom = require('jsdom');
const fs = require('fs');
const expect = chai.expect;
describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!"); //this should pass wut lol
            done();
            window.close();
        });
    })
})