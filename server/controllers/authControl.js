const authUserModel = require('../models/authUserModel');

const getCurrentUser = async (req, res) => {}

const createNewUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const newUser = await authUserModel.create({username, email, password});
        res.status(200).json(newUser);
    }
    
    catch (error) {
        res.status(400).json(error.message);
    }
}

const logInUser = async (req, res) => {}

module.exports = {
    getCurrentUser,
    createNewUser,
    logInUser
}