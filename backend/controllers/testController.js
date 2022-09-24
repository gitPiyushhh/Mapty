const Test = require('./../models/testModel');

exports.createOne = async (req, res, next) => {
    const doc = await Test.create(req.body);

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })

}

exports.getAll = async (req, res, next) => {
    const doc = await Test.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    })
}