import jwt from 'jsonwebtoken';


export const getToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
		  isEmployer: user.isEmployer,
		},
		process.env.JWT_KEY,
		{ expiresIn: '48h' }
	);
};

export const verifyUser = (req, res, next) => {
  
    const token = req.headers.authorization;
    if(token){
        const onlyToken = token.slice(7,token.length);
        jwt.verify(onlyToken, process.env.JWT_KEY, (err, decode) => {
            if(err){
                res.send({msg: "invalid token"})
            }
            req.user = decode;
            next();
            return
        })
    }else{
         res.send({ msg: ' token is not supplied' });
    }
}

export const verifyEmployer = (req, res, next) => {
    if(req.user && req.user.isEmployer){
        return next();
    }
    return res.send({msg: "Employer token is not valid!"})
}

// user info, jwt secret, expiry
