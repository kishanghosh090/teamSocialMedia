// register controller

const register = async (req, res, next) => {
    try {
        let user = User.findOne({ email: req.body.email });
        if(!user){
            return res.status(400).json({ error : "Some error Occured" });
        }
    } catch (error) {
        
    }
};

// login controller
const login = (req, res, next) => {
    
};

// google login
const googleLogin = (req, res, next) => {};

// edit profile
const editProfile = (req, res, next) => {};

export { register, login, googleLogin, editProfile };
