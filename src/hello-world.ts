import * as Express from "express";
const app = Express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
export default app;
