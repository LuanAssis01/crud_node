import express from "express"
import "dotenv/config"

const app = express()
const port = process.env.PORT || 3000

app.listen(port, (error) => {
    if(error){
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo");
});