const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const requireAuth = async (req, res, next) => {

  // Verify JWT token
  const token = req.headers['authorization'].split(' ')[1];
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  });
  const payload = ticket.getPayload();
  req.user = payload;

  next();

}

module.exports = {
  requireAuth
};
