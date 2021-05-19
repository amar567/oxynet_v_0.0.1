const cheerio = require('cheerio');
const axios = require('axios');

const data = [];
const andra = [];

async function get(){
    axios.get('http://dashboard.covid19.ap.gov.in/ims/hospbed_reports/')
    .then((res) => {
        const $ = cheerio.load(res.data);
        // console.log(res.data);
        console.log($(`#page-top > main > div`).html())

        // for(var i=0;i<data.length;i++){
        //     console.log(data[i])
        // }
    })
    .catch((err) => {
        console.log(err);
    })
}

get();