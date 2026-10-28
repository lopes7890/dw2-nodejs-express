// Este middleware será invocado a cada requisição do usuário em rotas especificas para checar sua autenticação

function Auth(req, res, next){
    // Verificando se a sessão de usuário existe
    if(req.session.user != undefined){
        next();
    } else {
        // Se a sessão não existir
        res.render("login", {
            loggedOut: true,
        });
    }
}

export default Auth;

