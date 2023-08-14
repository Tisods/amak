import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.reply(m.chat, `┌ *「 Invite Grup 」*
│ ✅Join 1 grup
│ 
│ 7 Hari / Rp 5k
│ 30 Hari / Rp 15k
└────
Hubungi @${global.nomorown}
`.trim(), m)
    }
}

export default handler