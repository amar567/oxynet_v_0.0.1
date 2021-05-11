const cheerio = require('cheerio');
const axios = require('axios');

const data = [];
const jharkhand = [];

axios.get('https://www.jharkhand.gov.in/Home/CovidDistrict')
    .then((res) => {
        const $ = cheerio.load(res.data);
        $(`#dialog > table > tbody > tr > td`).each((index, element) => {
            data.push($(element).text().trim());
        });

        k=2;l=6;m=3;x=4;y=5;
        for(var i=0;i<24;i++){
            var objData = {
                district : data[k],
                deaths : data[l],
                totalCases : data[m],
                activeCases : data[x],
                recovered : data[y]
            }
            jharkhand.push(objData);

            k+=6;l+=6;m+=6;x+=6;y+=6;
        }

        console.log(jharkhand)
    })
    .catch((err) => {
        console.log(err);
    })
