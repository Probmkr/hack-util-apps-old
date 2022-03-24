import Express from "express";
const app = Express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
export default app;
