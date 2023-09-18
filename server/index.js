import cors from "cors"
import express from "express"
import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "Download do vídeo realizado com sucesso!" })
})

/*Define a porta que vai executar o servidor e server para ele ficar "ouvindo" as requisições */
app.listen(3333, () => console.log("Server is running on port 3333"))
