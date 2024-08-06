import express, { Request, Response } from "express";

const app = express();
const port: number = 3000;

app.use(express.json());

app.post("/add", (req: Request, res: Response) => {
  const result = req.body.a + req.body.b;
  res.json({ result: result });
});

app.post("/subtract", (req: Request, res: Response) => {
  const result = req.body.a - req.body.b;
  res.json({ result: result });
});

app.post("/devide", (req: Request, res: Response) => {
  if (req.body.b == 0) {
    res.send("Cannot devide by 0");
  } else {
    const result = req.body.a / req.body.b;
    res.json({ result: result });
  }
});

app.post("/multiply", (req: Request, res: Response) => {
  const result = req.body.a * req.body.b;
  res.json({ result: result });
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
