import { googleImage, pinterest } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
// if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
	
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
        await conn.sendFile(m.chat, res, `Anime Convert.jpg`, `Karepmu, nih hentai ${command.capitalize()} mu`, m)
    }
handler.help = ['hentai2 character']
handler.tags = ['anime']
handler.command = ['hentai2']

handler.limit = true

export default handler