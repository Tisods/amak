import axios from 'axios';
import cheerio from 'cheerio';

const ArtiNama = async (nama) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/arti_nama.php?nama1=${nama}&proses=+Submit%21+`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const isi = $('#body').text().split('Nama:')[0];
        const result = isi.replace(';', '').replace('(adsbygoogle = window.adsbygoogle || []).push({})', '').trim();
        const res = {
          status: 200,
          result: result
        };
        resolve(res);
      })
      .catch(reject);
  });
};

export { ArtiNama };
