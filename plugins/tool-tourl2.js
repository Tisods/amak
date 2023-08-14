import fs from 'fs'
import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m) => {
	let q = m.quoted ? m.quoted : m
	let mime = q.mediaType || ''
	if (/image|video|audio|sticker|document/.test(mime)) {
		let media = await q.download(true)
		let data = await uploadFile(media)
		m.reply(`_UPLOAD V2 by *KIBOT*_\n\n*Link:* ${data.files[0].url}\n*Expired:* 2 Hari kedepan`)
	} else throw 'Tidak ada media yang di reply\nReply gambar/video yang ingin di upload'
}
handler.help = ['upload2 (reply media)', 'tourl2 (reply media)']
handler.tags = ['tools'] 
handler.command = /^(tourl2|upload2)$/i

export default handler

async function uploadFile(path) {
	let form = new FormData()
	form.append('files[]', fs.createReadStream(path))
	let res = await (await fetch('https://uguu.se/upload.php', {
		method: 'post',
		headers: {
			...form.getHeaders()
		},
		body: form
	})).json()
	await fs.promises.unlink(path)
	return res
}