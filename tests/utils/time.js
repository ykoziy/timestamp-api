const assert = require('assert');
const time = require('../../utils/time');

describe('Util Time Modue', () => {
  describe('Parsing Date time.parseDate(input)', () => {
    it('should return {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"} if input: "1451001600000"', () => {
      let testObj = {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"};
      assert.deepEqual(testObj, time.parseDate('1451001600000'));
    });
    it('should return {"unix":null,"utc":"Invalid Date"} if input: IAmNotADate', () => {
      assert.deepEqual({'unix':null,'utc':'Invalid Date'}, time.parseDate('IAmNotADate'));
    });
    it('should return {"unix":null,"utc":"Invalid Date"} if input: 1451001 600000', () => {
      assert.deepEqual({'unix':null,'utc':'Invalid Date'}, time.parseDate('1451001 600000 '));
    });
    it('should return {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"} if input: "2015-12-25"', () => {
      let testObj = {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"};
      assert.deepEqual(testObj, time.parseDate('2015-12-25'));
    });
  });
});