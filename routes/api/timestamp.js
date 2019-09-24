const time = require('../../utils/time');
module.exports = (req, res) => {
  const str = req.params.date_string;
  res.send(time.parseDate(str));
}