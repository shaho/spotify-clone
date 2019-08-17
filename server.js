const express = require("express");
const request = require("request");
const querystring = require("querystring");

require("dotenv").config();

const app = express();

const redirect_uri =
  process.env.REDIRECT_URI || "http://localhost:8888/callback";

app.get("/login", function(req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.CLIENT_ID,
        scope: "user-read-private user-read-email",
        redirect_uri,
      }),
  );
});

app.get("/callback", function(req, res) {
  const code = req.query.code || null;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET,
        ).toString("base64"),
    },
    json: true,
  };
  request.post(authOptions, function(error, response, body) {
    const access_token = body.access_token;
    const uri = process.env.FRONTEND_URI || "http://localhost:3000";
    res.redirect(uri + "?access_token=" + access_token);
  });
});

const port = process.env.PORT || 8888;
console.log(
  `Listening on port ${port}. Go /login to initiate authentication flow.`,
);
app.listen(port);
