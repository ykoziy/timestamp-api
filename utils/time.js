const errorObj = {'unix':null,'utc':'Invalid Date'};

const parseDate = input => {
  let resultDate = errorObj;
  let regex = RegExp('^\\d+$');
  let date;

  if(regex.test(input)) {
    date = new Date(parseInt(input));
    resultDate = {unix:input, utc:date.toUTCString()};
  } else {
    let timestamp = Date.parse(input);
    if(isNaN(timestamp) == false) {
      date = new Date(timestamp);
      resultDate = {unix:date.getTime(), utc:date.toUTCString()};
    }
  }
  return resultDate;
};

module.exports.parseDate = parseDate;