import fetch from 'node-fetch'

const handler = async (m, { conn, command }) => {
  try {
    let name = conn.getName(m.sender)
    let caption = `Nih animenya kacau sih, lu dah nonton gak ${name}?`
    const randomElement = await getRandomElementFromJSON()
    await conn.sendFile(m.chat, randomElement, `${command}-error-jpg'`, caption, m)
  } catch (error) {
    console.log('Error:', error)
  }
}

handler.command = /^(ana)$/i
handler.tags = ['anime']
handler.help = ['ana']
handler.limit = true

export default handler

function getRandomElementFromJSON() {
  return new Promise((resolve, reject) => {
    fetch('https://github.com/ManagementMD/database/raw/main/anime/ana.json')
      .then(response => response.json())
      .then(json => {
        const randomIndex = Math.floor(Math.random() * json.length)
        const randomElement = json[randomIndex]
        resolve(randomElement)
      })
      .catch(error => {
        reject(error)
      })
  })
}
