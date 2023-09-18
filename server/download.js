import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("Realizando o download do vídeo:" + videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      //validação do short
      const seconds = info.formats[0].aproxDurationMs / 1000

      if (seconds > 60) {
        throw new Error("A duração desse vídeo é maior que 60 segundos.")
      }
    })
    .on("end", () => {
      console.log("Download do vídeo finalizado")
    })
    .on("error", (error) => {
      console.log(
        "Não foi possível fazer download do vídeo. Detalhes do erro:",
        error
      )
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4")) //recupera a informação e salva
}