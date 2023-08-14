import fetch from "node-fetch";
import moment from "moment-timezone";
import fs from "fs";
let handler = async (m, { conn, command, text }) => {
    let name1 = conn.getName(m.sender)
    let [nama] = text.split`|`
    if (!nama) throw `Masukkan nama yang ingin diberikan ${command.capitalize()} contoh:\n*.${command} Kiro*`

    let ftextt = {
        key: {
            participant: '0@s.whatsapp.net'
        },
        message: {
            "extendedTextMessage": {
                "text": `Ada apa ${nama}, sini curhat bareng ${name1.capitalize()}`,
                "title": bottime,
                'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
            }
        }
    }
    let name = await conn.getName(m.sender);
    let who =
        m.mentionedJid && m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.fromMe
                ? conn.user.jid
                : m.sender;
    let pp = await conn
        .profilePictureUrl(who, "image")
        .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
    let curhati = pickRandom(global.curhat);
    let flaa = pickRandom(global.flaaaaa);
    // m.reply(curhati)
    conn.sendFile(
        m.chat,
        `${flaa}curhat`,
        `${command}-error`,
        curhati,
        ftextt
    );
    // await conn.sendButton(m.chat, `${curhati}\n`,wm + '\n\n' + botdate, `${flaa}curhat`, [['NEXT','.curhat']], m, {
    // contextInfo: { externalAdReply :{ showAdAttribution: true,
    //                         sourceUrl: 'https://youtu.be/pwLZpdfO8AU',
    //                         mediaType: 2,
    //                         description: `⚘ ᴄʀᴇᴀᴛᴇ ᴹᴿ᭄ King Of Bear ×፝֟͜×`,
    //                         title: global.namebot,
    //                         body: `⚘ ᴄʀᴇᴀᴛᴇ ᴹᴿ᭄ King Of Bear ×፝֟͜×`,          previewType: 0,
    //                         thumbnail: await (await fetch(giflogo2)).buffer(),
    //                         mediaUrl: 'https://youtu.be/pwLZpdfO8AU'

    //                       }}
    // })
};
handler.help = ["curhat"];
handler.tags = ["quotes"];
handler.command = /^(curhat)$/i;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

global.curhat = [
    "Kangen sama yg namanya ketenangan, yg kebetulan belakangan ini jarang ditemui di kepala sendiri. Soalnya di kepala org dewasa, tenang makin lama makin langka :)",
    "Diatas langit masih ada langit. Diatasnya lagi, ada ekspektasi kita yang seringnya terbang ketinggian :)",
    "Ingat teman.. Dlm hidup ini ada beragam hal yg dpt kamu kendalikan dan beragam hal pula yg tdk dpt kamu kendalikan.. Dan disaat kamu terlalu memfokuskan diri atas hal-hal diluar kendalimu, akan membuatmu mudah stres, overthinking, cemas, dan gangguan psikis lainnya. Dan jikalau nanti kamu merasa mulai merasakan hal itu, jgn lupa utk meminta bantuan dr mereka yg ada disekitarmu. Baik itu yg d kehidupan keseharianmu (real life), ataupun dari mereka yg kamu kenal baik d dunia virtualmu.",
    "Jangan tutupi uneg-uneg jikalau kamu ingin dimengerti sepenuhnya.. Buka pintu itu, agar ia bisa melihat; dan mencoba utk mencari tahu apa yg harus ia lakukan.. Utk memperbaiki ruang rindu yg sedang sulit berkaitan dlm sebuah resonansi hubungan. - Medan, 4 Juni 2023",
    "Di kalau hidup tidak baik baik saja, jangan menyerah ingat masih ada teman, keluarga yang menuport kamu dari belakang, maka jangan menyerah teruslah berusaha hingga cita cita kamu tercapai.",
    "Jangan biarkan keegoisan menjadi trending topic dalam tata kelola hati dan perasaan.Jika semuanya bisa dihadapi dg kata 'saling', maka yakinlah bahwa frekuensi jiwa keduanya akan tetap seiring dan sejalan.- Medan, 2023",
    "Kalau hidup mu penuh cobain maka cobain aja mwehehehe",
    "Manusia itu berasal dari tanah, makan dari hasil tanah, berdiri di atas tanah, dan akan kembali ke tanah pula. lalu kenapa masih bersifat langit? - buya hamka✨",
    "Semua kesedihan dan masalah yang kamu hadapi saat ini mengarahkan kamu ke arah yang lebih baik, dan rasa sakit yang kamu rasain hari ini akan mendewasakan kamu jadi semua ada tujuan tersendiri dari tuhan untuk kamu❤️",
    "Manusia itu indah bukan dengan apa yang dia miliki namun dengan apa yang dia berikan. Matahari memiliki api yang sangat mematikan namun ia selalu indah dengan memberi cahaya kepada Dunia. - Habib Ali Zaenal Abidin Bin Alwi Al-Kaff -",
    "Utamakan akhirat dalam hal segala hal dunia kita bermula hari ini, sesungguhnya akhirat adalah permulaan kepada kehidupan yang sebenar. Ustaz Wadi Annuar",
    "Sesungguhnya hanyalah kepada Allah aku mengadu kesedihanku dan kesengsaraanku. Tidak ada tempat menumpahkan keluh kesah yang seutuh dan sebenarnya kecuali kepada-Nya. HR. Ahmad, Ibnu Hibban dan Al-Hakim",
    "Jika kamu mampu bertahan dalam kesedihan tanpa merusak siapapun, maka kamu benar-benar kuat. Karena dengan kata lain, kamu sudah mengalahkan hatimu sendiri.",
    "Menyusun jodoh dengan merencanakan masa depan berarti kita berusaha menjadi seseorang yang bisa dijadikan pelabuhan di segala kondisi. Jangan minta seseorang menyusun jodoh dan masa depanmu jika dirimu hanya hanyut terbawa aliran kehidupan yang semakin tak menentu. By. Fitri Pelangi",
    "Jangan biarkan kebahagiaanmu bergantung pada orang lain. Ciptakan kebahagiaanmu sendiri dan bagikan dengan orang lain. - Medan, 2023",
    "Hidup adalah pelajaran yang panjang. Terkadang kita perlu merasakan sakit dan kegagalan untuk benar-benar menghargai kebahagiaan dan kesuksesan. - Medan, 2023",
    "Jadilah seseorang yang memiliki kebaikan hati yang tidak terbatas, bukan karena kesempatan atau kewajiban, tapi karena keikhlasan. - Medan, 2023",
    "Jangan mengubah dirimu hanya untuk menyenangkan orang lain. Jika mereka benar-benar mencintaimu, mereka akan menerimamu apa adanya. - Medan, 2023",
    "Ketika kamu menghargai dirimu sendiri, kamu akan memilih untuk berada di sekitar orang-orang yang juga menghargai dan menghormati kamu. - Medan, 2023",
    "Jangan biarkan kegagalan menghentikanmu. Jadikan kegagalan sebagai batu loncatan menuju kesuksesan. - Medan, 2023",
    "Hidupmu adalah cerita yang berharga. Tulislah setiap bab dengan penuh kebahagiaan, keberanian, dan cinta. - Medan, 2023",
    "Cintailah dirimu sendiri terlebih dahulu, sebelum mencoba mencintai orang lain. - Medan, 2023",
    "Saat kamu merasa sedih, ingatlah bahwa tidak ada badai yang abadi. Matahari akan kembali bersinar dan membawa kehangatan dalam hidupmu. - Medan, 2023",
    "Jangan biarkan masa lalu yang buruk menghancurkan masa depanmu. Bersihkan luka dan biarkan dirimu sembuh. - Medan, 2023",
    "Semoga hari ini lebih baik dari hari kemarin, dan esok lebih baik dari hari ini. - Medan, 2023"
  ];  

global.flaaaaa = [
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=500&scaleHeight=300&text=",
    "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=500&scaleHeight=300&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
    "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=500&scaleHeight=300&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
];

function ucapan() {
    const time = moment.tz("Asia/Jakarta").format("HH");
    res = "Selamat dinihari 🎑";
    if (time >= 4) {
        res = "Good Morning 🌅";
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️";
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇";
    }
    if (time >= 18) {
        res = "Good Evening 🌃";
    }
    return res;
}
