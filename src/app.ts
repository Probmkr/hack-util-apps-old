import * as Express from "express";
import * as ctl from "./controllers/main-controller";
const app = Express();

// 環境変数（暫定的）
const port = 5000;

app.set("view engine", "ejs");
app.set("views", "resource/views");

app.use(Express.static("resource/public"));

app.get("/", ctl.top);

app.listen(port, function () {
  console.log(`Node.js is listening to PORT:${port}`);
});
