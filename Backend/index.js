const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", (req, res) => {
    res.send({
      data: [
        [true, false, true],
        [true, false, true],
        [true, true, true],
      ],
    });
    console.log("data is sent");
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};
prepareAndStartServer();
