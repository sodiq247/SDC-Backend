const husmoServices = require("../services/husmo.services");

module.exports = {
  data: async (req, res) => {
   
    let result = await husmoServices.data(req, res);
    console.log(result);
    res.send(result);
  },
  airtime: async (req, res) => {
    let result = await husmoServices.airtime(req, res);
    console.log(result);
    res.send(result);
  },
  allDataTransactions: async (req, res) => {
    let result = await husmoServices.allDataTransactions(req, res);
    console.log(result);
    res.send(result);
  },
  validateMeter: async (req, res) => {
    let result = await husmoServices.validateMeter(req, res);
    console.log(result);
    res.send(result);
  },
  validateIUC: async (req, res) => {
    let result = await husmoServices.validateIUC(req, res);
    console.log(result);
    res.send(result);
  },
  cablesub: async (req, res) => {
    let result = await husmoServices.cablesub(req, res);
    console.log(result);
    res.send(result);
  },
  electric: async (req, res) => {
    let result = await husmoServices.electric(req, res);
    console.log(result);
    res.send(result);
  }
  
};
