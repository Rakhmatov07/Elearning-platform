const { sign } = require("../../libs/jwt");
const pg = require("../../libs/pg")


const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const admin = ((await pg("SELECT admin_uid, username, password FROM admins WHERE username=$1 and password=$2;", username, password)).rows)[0];
        if(!admin) res.status(404).json({message: "Not Found"});
        const token = sign(admin.admin_uid);
        
        res.status(200).json({token});
    } catch (error) {
        console.log(error.message);
    }
};


module.exports = login;