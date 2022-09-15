const express = require("./config/express");

const server = express();
const port = 3005;
server.listen(port, () => {
  console.log(`🔥Server Is Running At Port ${port}🔥`);
});
