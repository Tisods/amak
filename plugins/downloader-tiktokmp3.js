import fs from 'fs';
import fetch from 'node-fetch';
import { Tiktok } from '@xct007/tiktok-scraper';

let handler = async (m, { conn, text, groupMetadata, usedPrefix, command, args }) => {
  if (!args[0]) throw `[ *TIKTOK* ]\n\nCara penggunaannya ${usedPrefix}${command} <link tiktok>\n\n_Tanpa tanda kurung_`;

  let links = await Tiktok(args[0]);
  const url = links.download.music;
// let lagu = json.download.music


  // Lakukan operasi lain sesuai kebutuhan
  // Misalnya, unduh video atau kirim ke pengguna

  // Contoh: Unduh video menggunakan node-fetch
  const response = await fetch(url);
  const videoBuffer = await response.buffer();
  fs.writeFileSync('video.mp4', videoBuffer);

  // Contoh: Kirim video ke pengguna menggunakan WhatsApp Bot
  // conn.sendFile(m.chat, 'video.mp4', 'Video TikTok');
  conn.sendFile(m.chat, url, 'error-Tiktok.mp4', 'caption', m);
    console.log(links)
};

handler.help = ['tiktok'].map((v) => 'tiktok ' + v);
handler.tags = ['video'];
handler.command = /^(ttmp3|tiktokmp3)$/i;

export default handler;
