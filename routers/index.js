import atendimento from "./atendimento.js"

export default (app, express) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    app.use(atendimento)
}