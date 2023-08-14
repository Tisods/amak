import { WAProto } from '@whiskeysockets/baileys'

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let imgr = flaaa.getRandom()
    let M = WAProto.WebMessageInfo
    let which = command.replace(/list/i, '')
    let msgs = global.db.data.msgs
    if (Object.keys(msgs).length === 0) throw 'Belum ada pesan yang ditambahkan.'

    let listMsg = Object.keys(msgs).map(key => `${key}`).join('\n')
    m.reply(`List pesan yang tersedia:\n\n${listMsg}`)
}

handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'list' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|stic?ker|gif)$/

export default handler
