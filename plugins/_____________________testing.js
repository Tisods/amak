import fs from 'fs'
import fetch from 'node-fetch'
import { Tiktok } from '@xct007/tiktok-scraper'

let handler = m => m
handler.before = async function (m, { text, usedPrefix, command }) {

    let tt = `https://vt.tiktok${m.text.slice(17)}`
    if (m.text.startsWith(tt)) {
        if (m.text.includes(tt)) {
            this.reply(m.chat, `Fitur auto convert nya masih tahap uji coba, jadi kalo error maklum aja`, null)
            const response = await fetch(tt)
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
*.${command}mp3 ${tt}*`
this.sendFile(m.chat, videonowm, 'error-Tiktok.mp4', caption, m)
}).catch((error) => {
console.log(error)
m.reply('Terjadi kesalahan dalam mengambil data TikTok')
})
        }
    }
}
handler.limit= true
export default handler 
