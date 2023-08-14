const { downloadContentFromMessage } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn }) => {
    if (!m.quoted) throw `Balas pesan viewOnce nya!`
    let type = Object.keys(m.quoted.message)[0]
    let q = m.quoted.message[type]
    let media = await downloadContentFromMessage(q, type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk])
        }
        if (/video/.test(type)) {
            return conn.sendFile(m.chat, buffer, 'media.mp4', [type].caption || '', m)
            
        } else if (/image/.test(type)) {
            return conn.sendFile(m.chat, buffer, 'media.jpg', [type].caption || '', m)
        }
    }
handler.help = ['readviewonce']
handler.tags = ['group']
handler.command = /^(rv|readviewonce)$/i
export default handler