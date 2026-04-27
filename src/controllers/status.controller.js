function getStatus(_req, res) {
  res.json({ message: 'TukTuk Tracking API is running' });
}

module.exports = { getStatus };
