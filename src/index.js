import { app, port } from "./app.js";
import connectDb from "./db/db.js";

app.get("/", (req, res, next) => {
  res.send("hello g");
});

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on port http://localhost:" + port);
    });
  })
  .catch((err) => console.log(err));
