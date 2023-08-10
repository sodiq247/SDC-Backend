const apiUtils = require("../helpers/apiUtils");
const { ApiUtils } = require("../helpers/apiUtils");

module.exports = {
  data: async (req, res) => {
    let token = "Token " + process.env.HUSMO_TOKEN;
    let base_url = process.env.HUSMO_BASEURL;
    let data = JSON.stringify({
      network: 1,
      mobile_number: "08068778337",
      plan: 51,
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
    let token = "Token " + process.env.HUSMO_TOKEN;
    let base_url = process.env.HUSMO_BASEURL;
    let data = JSON.stringify({
      network: 1,
      amount: 50,
      mobile_number: "08105082299",
      Ported_number: true,
      airtime_type: "VTU",
    });
    let url = base_url + "topup/";
    let config = {
      headers: {
        Authorization: token,
      },
    };

    let result = await apiUtils.post(url, data, config);
    return result;
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
