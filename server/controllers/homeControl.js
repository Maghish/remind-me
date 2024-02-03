const returnSample = async (req, res) => {
    res.status(200).json({
        "msg": "Hello World"
    })
}

module.exports = {
    returnSample,
}