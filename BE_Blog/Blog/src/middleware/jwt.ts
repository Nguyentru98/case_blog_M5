import jwt from 'jsonwebtoken';

export const SECRET = '12456'
export const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
       let accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jwt.verify(accessToken, SECRET, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: ''
                    })
                } else {
                    req.decode = payload;
                    next();
                }
            })
        } else {
            res.status(401).json({
                message: ''
            })
        }
    } else {
        res.status(401).json({
            message: ''
        })
    }
}

export default auth;
