const husmoServices = require("../services/husmo.services")

module.exports={
    data:async(req, res)=>{
        let result=await husmoServices.data(req, res)
    },
    airtime:async(req, res)=>{
        let result=await husmoServices.airtime(req, res)
    },
    allDataTransactions:async(req, res)=>{
        let result=await husmoServices.allDataTransactions(req, res)
    }


}