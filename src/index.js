import express from "express"
import router from "./routes/user.js";

const app = express();  //inicalizando api through express
app.use(express.json())
app.use("/api/v1", router)

const port = 3000
app.listen(port, () => {
    console.info("Servidor rodando na porta 3000");
})