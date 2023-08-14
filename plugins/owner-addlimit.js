let handler = async (m, { conn, text }) => {
	let [lim, sia] = text.split`|`
    if (!lim) throw 'Masukkan jumlah dengan angka'
    let limit = parseInt(lim)
    if (isNaN(limit)) throw 'Hanya angka'
    if (m.isGroup) sia = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else sia = m.sender
    if (typeof db.data.users[sia] == 'undefined') throw 'Pengguna tidak ada dalam database'
    global.db.data.users[sia].limit += limit
    conn.reply(m.chat, `Sukses menambahkan limit sebanyak ${limit}`, m)
}
handler.help = ['addlimit [@user]']
handler.tags = ['owner']
handler.command = /^(addlimit)$/i
handler.owner = true

export default handler
