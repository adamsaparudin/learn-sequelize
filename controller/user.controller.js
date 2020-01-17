const { User, Transaction, Kelas, UserKelas } = require("../models");

exports.createUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    const user = await User.create({
      email: email,
      password: password,
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.addUserKelas = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      throw new Error("User not found");
    }

    const kelas = await Kelas.findByPk(req.body.kelasId);
    if (!kelas) {
      throw new Error("Kelas not found");
    }

    const userKelas = await UserKelas.create({
      kelasId: req.body.kelasId,
      userId: user.id,
    });

    return res.json(userKelas);
  } catch (err) {
    next(err);
  }
};

exports.getUserKelas = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      include: [
        {
          model: Kelas,
          attributes: ["name", "jam"],
          through: { attributes: [] },
        },
      ],
    });

    return res.json(user);
  } catch (errr) {
    next(errr);
  }
};

exports.getUserTransaction = async (req, res, next) => {
  try {
    const userTrans = await User.findByPk(req.params.userId, {
      include: [
        {
          model: Transaction,
          attributes: ["id", "amount"],
          required: true,
          as: "transactions",
        },
      ],
    });

    res.json(userTrans);
  } catch (err) {
    next(err);
  }
};
