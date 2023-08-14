import fs from 'fs'
import fetch from 'node-fetch'
import { Tiktok } from '@xct007/tiktok-scraper'

let handler = async (m, { conn, text, groupMetadata, usedPrefix, command, args }) => {
if (!args[0]) throw `[ *TIKTOK* ]\n\nCara penggunaan nya ${usedPrefix}${command} <link tiktok>\n\n_Tanpa tanda kurung_`
const response = await fetch(args[0])
const url = response.url
Tiktok(url).then((json) => {
console.log(json)
let videonowm = json.download.nowm
let username = json.author.unique_id
let deskripsi = json.desc
let like = json.statistics.digg_count
let komen = json.statistics.comment_count
let putar = json.statistics.play_count

let caption = `*Follow Tiktok owner juga: tiktok.com/@kirofyzu*\n*By:* @${username}
*Deskripsi:* ${json.desc}
*Like:* ${like}
*Komen:* ${komen}
*Play:* ${putar}\n
JIka ingin mendownload audio/musicnya saja gunakan
*.${command}mp3 ${args[0]}*`
conn.sendFile(m.chat, videonowm, 'error-Tiktok.mp4', caption, m)
}).catch((error) => {
console.log(error)
m.reply('Terjadi kesalahan dalam mengambil data TikTok')
})
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok|ttdl)$/i
handler.limit= true

export default handler
