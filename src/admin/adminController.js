const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");
const crypto = require("crypto");

exports.checkAdmin = async function (req, res) {
  const url = "admin33424asdasdffsdasd";
  const hashedUrl = await crypto.createHash("sha512").update(url).digest("hex");
  const { id, password } = req.body;
  if (id == "cksgh1735" && password == "1") {
    return res.send(response(baseResponse.SUCCESS, hashedUrl));
  } else {
    return res.send(response(baseResponse.FALSE, hashedUrl));
  }
};
