import router from "./data.js"; 
import express from "express";
const app = express();
const port = 7900;

app.use(express.json());
app.use("/prices", router);

app.get("/", (req, res) => {
    res.send("hello world, checking API file");
    res.end();
})

app.listen(port, () => {
    console.log(`port is listning at http://localhost ${port}`);
})