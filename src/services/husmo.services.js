const apiUtils = require("../helpers/apiUtils");
const { ApiUtils } = require("../helpers/apiUtils");

module.exports = {
  // data: async (req, res) => {
  //   try{
  //     let token = "Token " + process.env.HUSMO_TOKEN;
  //     let base_url = process.env.HUSMO_BASEURL;
  //     let data = JSON.stringify({
  //       network: req.body.network,
  //       mobile_number: req.body.mobile_number,
  //       plan: 255,
  //       Ported_number: true,
  //     });
  //     console.log(data)
  //     // let url = base_url + "api/data/";
  //     let config = {
  //       method: 'post',
  //       maxBodyLength: Infinity,
  //       url: base_url + '/api/data/',
  //       headers: { 
  //         'Authorization': token, 
  //         'Content-Type': 'application/json'
  //       },
  //       data : data
        
  //     };
  
  //     let result = await apiUtils.post(url, data, config);
  //     return result;
  //   }catch(e){
  //     console.log('error block',e.message)
  //   }

  // },
  data: async (req, res) => {
    try {
      let token = "Token " + process.env.HUSMO_TOKEN;
      let base_url = process.env.HUSMO_BASEURL;
      let data = JSON.stringify({
        network: req.body.network,
        mobile_number: req.body.mobile_number,
        plan: req.body.plan,
        Ported_number: true,
      });
      let url = base_url + "api/topup/";
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: base_url + '/api/data/',
        headers: { 
          'Authorization': token, 
          'Content-Type': 'application/json'
        },
        data : data
        
      };
      console.log(data);

      let result = await apiUtils.post(url, data, config);
      return result;
    } catch (e) {
      console.log('error block',e);
      return e;
    }
  },
  airtime: async (req, res) => {
    try {
      let token = "Token " + process.env.HUSMO_TOKEN;
      let base_url = process.env.HUSMO_BASEURL;
      let data = JSON.stringify({
        network: req.body.network,
        amount: req.body.amount,
        mobile_number: req.body.mobile_number,
        Ported_number: true,
        airtime_type: req.body.airtime_type,
      });
      let url = base_url + "api/topup/";
      let config = {
        method: 'post',
  maxBodyLength: Infinity,
  url: base_url + '/api/topup/',
  headers: { 
    'Authorization': token, 
    'Content-Type': 'application/json'
  },
  data : data
      };
      console.log(data);

      let result = await apiUtils.post(url, data, config);
      return result;
    } catch (e) {
      console.log('error block',e);
      return e;
    }
  },
  electric: async (req, res) => {
    try {
      let token = "Token " + process.env.HUSMO_TOKEN;
      let base_url = process.env.HUSMO_BASEURL;
      let data = JSON.stringify({
        disco_name: req.body.disco_name,
        amount: req.body.amount,
        meter_number: req.body.meter_number,
        MeterType: req.body.MeterType,
      });
      let url = base_url + "api/billpayment/";
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: base_url + '/api/billpayment/',
        headers: { 
          'Authorization': token, 
          'Content-Type': 'application/json'
  },
  data : data
      };
      console.log(data);

      let result = await apiUtils.post(url, data, config);
      return result;
    } catch (e) {
      console.log('error block',e);
      return e;
    }
  },
  // cabletv: async (req, res) => {
  //   try {
  //     let token = "Token " + process.env.HUSMO_TOKEN;
  //     let base_url = process.env.HUSMO_BASEURL;
  //     let data = JSON.stringify({
  //       cablename: req.body.cablename,
  //       cableplan: req.body.cableplan,
  //       smart_card_number: req.body.smart_card_number,
  //       amount: 4800,
  //     });
  //     let url = base_url + "api/billpayment/";
  //     let config = {
  //       method: 'post',
  // maxBodyLength: Infinity,
  // url: 'https://www.husmodata.com/api/cablesub/',
  // headers: { 
  //   'Authorization': 'Token a3b49991c6bfd021c12f90f360cf7c33be84ed22', 
  //   'Content-Type': 'application/json'
  // },
  // data : data
  //     };
  //     console.log(data);

  //     let result = await apiUtils.post(url, data, config);
  //     return result;
  //   } catch (e) {
  //     console.log('error block',e);
  //     return e;
  //   }
  // },
  cabletv: async (req, res) => {
    try {
      let token = "Token " + process.env.HUSMO_TOKEN;
      let base_url = process.env.HUSMO_BASEURL;
       let data = JSON.stringify({
        cablename: req.body.cablename,
        cableplan: req.body.cableplan,
        smart_card_number: req.body.smart_card_number,
        amount: 4800,
      });
      let url = base_url + "api/billpayment/";
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: base_url + "/api/cablesub/",
        headers: { 
          'Authorization': token, 
          'Content-Type': 'application/json'
        },
        data : data
      };
      console.log(data);

      let result = await apiUtils.post(url, data, config);
      return result;
    } catch (e) {
      console.log('error block',e);
      return e;
    }
  },

  allDataTransactions: async (req, res) => {
    let token = "Token " + process.env.HUSMO_TOKEN;
    let base_url = process.env.HUSMO_BASEURL;
    let url = base_url + "data/";
    let config = {
      headers: {
        Authorization: token,
      },
    };

    let result = await apiUtils.get(url, config);
    return result;
  },
};
