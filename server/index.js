const cors = require("cors");
const express = require("express");
const port = 3001;
const router = express.Router();
const bodyParser = require("body-parser");
const { S3 } = require("aws-sdk");
const awsOpts = { region: "us-east-1" };
const s3 = new S3(awsOpts);
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set("port", port);
app.listen(port, function () {
	console.log("Server available at http://localhost:" + port);
});
router.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use("/api", router);
