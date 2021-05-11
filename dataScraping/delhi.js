const cheerio = require('cheerio');
const axios = require('axios');

const data = [];
const delhi = [];

async function get(){
    axios.get('https://oxygen.jantasamvad.org/')
    .then((res) => {
        const $ = cheerio.load(res.data);
        $(`#id_entries_list > tbody > tr > td`).each((index, element) => {
            data.push($(element).text().trim());
        });

        m=0;k=1;x=2;
        while(x<data.length){
            var objData = {
                area : data[m],
                distributer : data[k].split('\n')[0].trim(),
                phoneNo : data[k].split('\n')[1],
                address : data[x],
            }

            delhi.push(objData);
            m+=3;k+=3;x+=3;
        }   

        console.log(delhi);
    })
    .catch((err) => {
        console.log(err);
    })
}

get();