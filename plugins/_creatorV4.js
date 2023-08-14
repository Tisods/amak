import PhoneNumber from 'awesome-phonenumber'
import fs from 'fs'
const trol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2525,
                            itemCoun : 2525,
                            surface :2525,
                            message: author,
                            orderTitle: 'B',
                            thumbnail: fs.readFileSync("./thumbnail.jpg"),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
async function handler(m) {
let a = [{
    displayName: 'KIBOT',
    vcard: 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n'
    + 'N:;Nomor BOT;;;FN:~ ʙᴏᴛᴢ ~\n'
    + 'ORG:Kiro BOT\n'
    + `TEL;Owner;waid=${nomorbot}:${nomorbot}\n`
    //+ 'item1.TEL;Support Whatsapp;waid=48729751966:48729751966\n'
    //+ `item1.X-ABLabel:Creator2\n`
    + 'item2.EMAIL;type=INTERNET:kirobot25@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:bot.kiro.my.id\n'
    + 'item4.ADR:;;Indonesia, Pontianak;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'item5.X-ABLabel:Sewa BOT 10k/perbulan\n'
    + 'END:VCARD'
  },
  {
      displayName: 'Kiro Fyzu',
    vcard: 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n'
    + 'N:;Nomor Owner;;;FN:~ ʙᴏᴛᴢ ~\n'
    + 'ORG:Kiro Fyzu\n'
    + `TEL;Kiro;waid=${nomorown}:${nomorown}\n`
    //+ 'item1.TEL;Support Whatsapp;waid=48729751966:48729751966\n'
    //+ `item1.X-ABLabel:Istri Owner😍\n`
    + 'item2.EMAIL;type=INTERNET:kirofyzu@gmail.com\n'
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:kiro.my.id\n'
    + 'item4.ADR:;;var/www/html;;;;\n'
    + 'item4.X-ABLabel:Region\n'
    + 'item5.X-ABLabel:const me = required("you");\n'
    + 'END:VCARD'
      }];

 let quoted = await conn.sendMessage(m.chat, { contacts: { displayName: 'Huy', contacts: a }}, m)
//   return conn.sendButton(m.chat, '*TO THE POINT KLO CHAT, OWNER GA SUKA BERTELE TELE GA PENTING = 🥜, BACA RULESNYA JUGA DICK*', author, [`Rules`, `,rules`], quoted)
}
handler.help = ['owner', 'creator']
handler.tags = ['owner']

handler.command = /^(owner|creator|own)$/i

export default handler