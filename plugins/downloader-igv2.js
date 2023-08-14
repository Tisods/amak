import fetch from 'node-fetch'
import snapsave from "snapsave-downloader"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = (await snapsave(args[0]))
    const url = results.data[0].url;
console.log(results)
    conn.sendFile(m.chat, url, 'instagram.mp4', 'Main IG juga yah?, jang lupa follow IG ku\ninstagram.com/callme_kiro', m)
}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command = /^(ig|igdl)$/i
handler.limit = true

export default handler
