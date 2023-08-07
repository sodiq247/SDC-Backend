module.exports={
    data:async(req, res)=>{
        const axios = require('axios');
        let data = JSON.stringify({
        "network": 1,
        "mobile_number": "08068778337",
        "plan": 51,
        "Ported_number": true
        });

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.husmodata.com/api/data/',
        headers: { 
            'Authorization': 'Token a3b49991c6bfd021c12f90f360cf7c33be84ed22', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

    },
    airtime:async(req, res)=>{
        const axios = require('axios');
        let data = JSON.stringify({
        "network": 1,
        "amount": 50,
        "mobile_number": "08105082299",
        "Ported_number": true,
        "airtime_type": "VTU"
        });

        let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.husmodata.com/api/topup/',
        headers: { 
            'Authorization': 'Token a3b49991c6bfd021c12f90f360cf7c33be84ed22', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

    },
    allDataTransactions:(req, res)=>{
        const axios = require('axios');
        let data = 'curl --location \'https:\n--data \'\'';

        let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.husmodata.com/api/data/',
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Token a3b49991c6bfd021c12f90f360cf7c33be84ed22'
        },
        data : data
        };

        axios.request(config)
        .then((response) => {
        console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
        console.log(error);
        });

    }

}