const jwt = require('jsonwebtoken');

///====================================
/// Verifica token 
///====================================
let verificarToken = (req, res, next) => {

    let token = req.get('token');

    //verificar token
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "token no válido"
                }
            });
        }

        req.usuario = decoded.usuario;
        next(); // para que se ejecute el codigo secuencial una vez verificado el token
    });
};


///====================================
/// Verifica usuario_Admin
///====================================
let verificaUsuarioAdmin = (req, res, next) => {

    let usuario = req.usuario.role;
    // console.log(usuario);
    if (usuario === 'ADMIN_ROLE') {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                message: "no autorizado para esta acción " + usuario
            }
        });
    }

};


module.exports = {
    verificarToken,
    verificaUsuarioAdmin
}