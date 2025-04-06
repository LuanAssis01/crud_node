import express from "express"
import "dotenv/config"
import router from "./routers/index.js"

const app = express()
const port = process.env.PORT || 3000


router(app)

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo");
});