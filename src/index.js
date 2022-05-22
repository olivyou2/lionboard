import app from "./app"

const port = 80;

app.listen(port, () => {
  console.log(`server open at ${port}`);
});
