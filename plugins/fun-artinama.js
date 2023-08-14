import { ArtiNama } from '../lib/artinama.js'
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh penggunaan\n#artinama caliph'
  m.reply((await ArtiNama(text)).result.replace('ARTI NAMA', '').trim())
    console.log(ArtiNama)
}
handler.help = ['artinama <namamu>']
handler.tags = ['primbon']

handler.command = /^(artinama)$/i

export default handler