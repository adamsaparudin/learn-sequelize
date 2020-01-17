const { Transaction } = require("../models");

exports.createTransaction = async (req, res, next) => {
  try {
    const trans = await Transaction.create({
      userId: req.body.userId,
      amount: req.body.amount,
    });

    return res.json(trans);
  } catch (err) {
    next(err);
  }
};
