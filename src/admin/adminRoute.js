module.exports = async function (app) {
  const crypto = require("crypto");
  const admin = require("./adminController.js");

  app.get("/admin", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

  app.get("/check.js", (req, res) => {
    res.sendFile(__dirname + "/check.js");
  });

  const url = "admin33424asdasdffsdasd";
  const hashedUrl = await crypto.createHash("sha512").update(url).digest("hex");

  app.get("/" + hashedUrl, (req, res) => {
    res.sendFile(__dirname + "/hi.html");
  });

  app.get("/script.js", (req, res) => {
    res.sendFile(__dirname + "/script.js");
  });

  app.post("/checkAdmin", admin.checkAdmin);

  app.get("/css/sb-admin-2.min.css", (req, res) => {
    res.sendFile(__dirname + "/css/sb-admin-2.min.css");
  });

  app.get("/vendor/jquery/jquery.min.js", (req, res) => {
    res.sendFile(__dirname + "/vendor/jquery/jquery.min.js");
  });

  app.get("/vendor/fontawesome-free/css/all.min.css", (req, res) => {
    res.sendFile(__dirname + "/vendor/fontawesome-free/css/all.min.css");
  });

  app.get("/vendor/datatables/dataTables.bootstrap4.min.css", (req, res) => {
    res.sendFile(
      __dirname + "/vendor/datatables/dataTables.bootstrap4.min.css"
    );
  });

  app.get("/vendor/bootstrap/js/bootstrap.bundle.min.js", (req, res) => {
    res.sendFile(__dirname + "/vendor/bootstrap/js/bootstrap.bundle.min.js");
  });

  app.get(
    "/vendor/fontawesome-free/webfonts/fa-solid-900.woff2",
    (req, res) => {
      res.sendFile(
        __dirname + "/vendor/fontawesome-free/webfonts/fa-solid-900.woff2"
      );
    }
  );

  app.get("/vendor/jquery-easing/jquery.easing.min.js", (req, res) => {
    res.sendFile(__dirname + "/vendor/jquery-easing/jquery.easing.min.js");
  });

  app.get("/js/sb-admin-2.min.js", (req, res) => {
    res.sendFile(__dirname + "/js/sb-admin-2.min.js");
  });

  app.get("/vendor/datatables/jquery.dataTables.min.js", (req, res) => {
    res.sendFile(__dirname + "/vendor/datatables/jquery.dataTables.min.js");
  });

  app.get("/vendor/datatables/dataTables.bootstrap4.min.js", (req, res) => {
    res.sendFile(__dirname + "/vendor/datatables/dataTables.bootstrap4.min.js");
  });

  app.get("/js/demo/datatables-demo.js", (req, res) => {
    res.sendFile(__dirname + "/js/demo/datatables-demo.js");
  });

  app.get("/vendor/bootstrap/js/bootstrap.bundle.min.js.map", (req, res) => {
    res.sendFile(
      __dirname + "/vendor/bootstrap/js/bootstrap.bundle.min.js.map"
    );
  });
};
