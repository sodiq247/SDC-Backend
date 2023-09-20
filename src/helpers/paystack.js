const { default: axios } = require("axios");
const uniqid = require("uniqid");
module.exports = {
  callback: async (ref) => {
    let resp = await axios.get(process.env.PAYSTACK_VERIFY + ref, {
      headers: {
        Authorization: "Bearer " + process.env.PAYSTACK_SECRET_KEY,
      },
    });
    return resp;
  },
};
