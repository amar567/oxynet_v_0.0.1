const cheerio = require('cheerio');
const axios = require('axios');

const data = [];
const chandigarh = [];

async function get(){
    axios.get('https://coronaharyana.in/')
    .then((res) => {
        const $ = cheerio.load(res.data);
        $(`#containner0-tab > div > div.post-content > div > p`).each((index, element) => {
            data.push($(element).text().trim());
        });

        for(var i=0;i<data.length;i++){
            console.log(data[i])
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

get();