const husmoServices = require("../services/husmo.services");

module.exports = {
  data: async (req, res) => {
    let result = await husmoServices.data(req, res);
    
    res.send(result);
  },
  airtime: async (req, res) => {
    let result = await husmoServices.airtime(req, res);
    console.log(result);
    res.send(result);
  },
  electric: async (req, res) => {
    let result = await husmoServices.electric(req, res);
    console.log(result);
    res.send(result);
  },
  allDataTransactions: async (req, res) => {
    let result = await husmoServices.allDataTransactions(req, res);
    console.log(result);
    res.send(result);
  },
};
