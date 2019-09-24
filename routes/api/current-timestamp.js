module.exports = (req, res) => {
  const date = new Date();
  const unixDate = date.getTime();
  const utcDate = date.toUTCString();
  res.json({unix:unixDate, utc:utcDate});
}