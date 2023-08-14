import { readMore, ranNumb, padLead } from '../lib/others.js'
import { promises } from 'fs'
import { join } from 'path'

let tagsanime = {
  'anime': '✨ *RANDOM PIC*'
}
const defaultMenu = {
  before: `
━ ━ *[ 🎎 ANIME STUFF ]* ━ ━
`.trimStart(),
  header: '╭─「 %category 」',
  body: '│ • %cmd',
  footer: '╰────\n',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let url = 'https://telegra.ph/file/25a8666d60d9e89e542b1.jpg'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '..', 'package.json')).catch(_ => ({}))) || {}
    let menuanime = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        menuanime: Array.isArray(plugin.tagsanime) ? plugin.menuanime : [plugin.menuanime],
        tagsanime: Array.isArray(plugin.tagsanime) ? plugin.tagsanime : [plugin.tagsanime],
        prefix: 'customPrefix' in plugin,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of menuanime)
      if (plugin && 'tagsanime' in plugin)
        for (let tag of plugin.tagsanime)
          if (!(tag in tagsanime) && tag) tagsanime[tag] = tag
    conn.animemenu = conn.animemenu ? conn.animemenu : {}
    let before = conn.animemenu.before || defaultMenu.before
    let header = conn.animemenu.header || defaultMenu.header
    let body = conn.animemenu.body || defaultMenu.body
    let footer = conn.animemenu.footer || defaultMenu.footer
    let _text = [
      before,
      ...Object.keys(tagsanime).map(tag => {
        return header.replace(/%category/g, tagsanime[tag]) + '\n' + [
          ...menuanime.filter(animemenu => animemenu.tagsanime && animemenu.tagsanime.includes(tag) && animemenu.menuanime).map(animemenu => {
            return animemenu.menuanime.map(menuanime => {
              return body.replace(/%cmd/g, animemenu.prefix ? menuanime : '%p' + menuanime)
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      })
    ].join('\n')
    let text = typeof conn.animemenu == 'string' ? conn.animemenu : typeof conn.animemenu == 'object' ? _text : ''
    let replace = {
      p: _p,
      '%': '%',
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    conn.sendFile(m.chat, url, 'menunime.jpg', text, m)
  } catch (e) {
    throw e
  }
}

handler.help = ['*menuanime*']
handler.tags = ['submenu']
handler.command = /^(animem(enu)?|m(enu)?anime)$/i

export default handler
