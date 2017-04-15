const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


describe('generate message', () => {
    it('should generate the correct message object', (done) => {
       var from = 'Bao';
       var text = 'test message generate';
       var res = generateMessage(from, text);
       expect(res.from).toBe(from);
       expect(res.text).toBe(text);
       expect(res.createdAt).toBeA('number');
       done();
    });
});

describe('generate location message', () => {
    it('should generate location message', (done) => {
        var from = 'Bao';
        var latitude = 1;
        var longitude = 1;
        var res = generateLocationMessage(from, latitude, longitude);

        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(res.createdAt).toBeA('number');
        done();
    });
});