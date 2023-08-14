import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
let handler = async (m, { conn, participants }) => {
  const text = 'Hidup bukan hanya sampai disini saja. Perjalanan kita masih sangatlah panjang. Menangis? Menangislah sampai dirimu merasa tenang. Namun, jangan terlalu berlarut - larut dalam kesedihan. Jangan biarkan kesedihan itu menganggu semua kegiatan duniamu. \n\nTakdir sudah ada yang menentukan. Namun, doa adalah salah satu kekuatan terbesar. \n\nPerjalananmu masih panjang. Masih banyak mimpi yang harus kamu raih dan gapai. \n\nApapun hasilnya nanti, ingatlah bahwa kamu telah melakukan yang terbaik. \n\nSemoga kata "SELAMAT" datang kepadamu . Dan ketika kata itu menghampirimu, ingatlah untuk tetap berusaha dan jangan pernah mengeluh. Karena, masa depan berada tepat di pilihan tanganmu dan jalan pikiranmu, bukan orang lain'
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
    m.reply(msg)
}
handler.help = ['h']
handler.tags = ['group']
handler.command = /^(h)$/i

handler.group = true
handler.admin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

