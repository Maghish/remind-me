const authUserModel = require('../models/authUserModel');

const getCurrentUser = async (req, res) => {}

const createNewUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const allUsers = await authUserModel.find({});
        let t = null;
        allUsers.forEach(user => {
            if (user.username.trimEnd() === username.trimEnd()) {
                t=1;
                res.status(400).json({
                    errorMessage: 'User already exists with the same username'
                }); 

                return
            }

            if (user.email.trimEnd() === email.trimEnd()) {
                t=1;
                res.status(400).json({
                    errorMessage: 'User already exists with the same email'
                }); 

                return 
            }
        }) 

        if (t === null) {
            const newUser = await authUserModel.create({username, email, password});
            res.status(200).json({
                userData: newUser,
                token: btoa(email)
            });

            return
        }
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