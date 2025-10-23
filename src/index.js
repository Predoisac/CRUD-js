import express from "express"
import router from "./routes/user.js";
import routerDog from "./routes/dog.js";
import routerTemp from "./routes/temp.js";


const app = express();  //inicalizando api through express
app.use(express.json())
app.use("/api/v1", routerTemp)

const port = 3000
app.listen(port, () => {
    console.info("Servidor rodando na porta 3000");
})