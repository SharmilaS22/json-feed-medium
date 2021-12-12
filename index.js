const express = require("express")
const request = require("request")
const app = express();

const PORT = process.env.PORT || 4000;
const USERNAME = '@sharmilas';  //username to retrieve posts

const MEDIUM_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${USERNAME}`;

app.get("/posts", (req, res, next) => {
  request.get(MEDIUM_URL, (err, apiResponse, body) => {
    if (!err && apiResponse.statusCode === 200) {
        res.send({
            data: JSON.parse(body)
        })
    } else {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => console.log("Server started at " + PORT));