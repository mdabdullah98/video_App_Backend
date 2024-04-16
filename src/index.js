import { app, port } from "./app.js";

import path from "path";

import connectDb from "./db/db.js";

app.get("/", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on port http://localhost:" + port);
    });
  })
  .catch((err) => console.log(err));
