const apiUtils = require("../helpers/apiUtils");
const { ApiUtils } = require("../helpers/apiUtils");

module.exports = {
  data: async (req, res) => {
    let token = "Token " + process.env.HUSMO_TOKEN;
    let base_url = process.env.HUSMO_BASEURL;
    let data = JSON.stringify({
      network: req.body.network,
      mobile_number: req.body.mobile_number,
      plan: 255,
      Ported_number: true,
    });

    let url = base_url + "data/";
    let config = {
      headers: {
        Authorization: token,
      },
    };

    let result = await apiUtils.post(url, data, config);
    return result;
  },
  airtime: async (req, res) => {
    try {
      let token = "Token " + process.env.HUSMO_TOKEN;
      let base_url = process.env.HUSMO_BASEURL;
      let data = JSON.stringify({
        network: req.body.network,
        amount: req.body.amount,
        mobile_number: req.body.mobile_number,
        Ported_number: req.body.ported_number,
        airtime_type: req.body.airtime_type,
      });
      let url = base_url + "topup/";
      let config = {
        headers: {
          Authorization: token,
        },
      };
      console.log(data);

      let result = await apiUtils.post(url, data, config);
      return result;
    } catch (e) {
      console.log(e);
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
