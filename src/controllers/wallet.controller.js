const paystack = require("../helpers/paystack");

module.exports = {
  creditWallet: async (req, res) => {
    try {
      let ref = req.body.reference;
      let paystackPayload = await paystack.callback(ref);
      if (paystackPayload.status == true) {
      
       
      } else {
        res.status(404).json({
          data: "invalid transaction reference",
          statusCode: 404,
        });
      }
    } catch (e) {
      res.status(500).json({
        data: e,
        statusCode: 500,
      });
    }
  },
};
