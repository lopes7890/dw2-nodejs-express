import express from "express";

// Importando o Model
import Usuario from "../models/Usuario.js";

// Importando a biblioteca Bcrypt
import bcrypt from "bcrypt";

const router = express.Router();

// ROTA DE LOGIN
router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true,
    });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
    // Limpa a sessão
    req.session.user = undefined

    // Redireciona para a Home
    res.redirect("/")
})

// ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res) => {
    // Coletando os dados do formulário
    const email = req.body.email;
    const password = req.body.password;

    // Buscar usuário no banco
    Usuario.findOne({where: {email: email}}).then(usuario => {
        // Se o usuário existir
        if (usuario != undefined){
            // Validar a senha
            const senhaCorreta = bcrypt.compareSync(password, usuario.password);
            // Se a senha for válida
            if (senhaCorreta){
                // AUTORIZA O LOGIN E CRIA A SESSÃO PARA O USUÁRIO
                req.session.user = {
                    id: usuario.id,
                    email: usuario.email
                }
                // res.send(`Usuário logado:<br>
                //     ID: ${req.session.user["id"]} <br>
                //     E-mail: ${req.session.user["email"]}`);
                res.redirect("/");
            // Se a senha for inválida
            } else {
                res.send(`Senha inválida!<br>
                    Verifique os dados e tente novamente! <br>
                    <a href="/login">Voltar</a>`)
            }
        // Se o usuário não existir
        } else {
                res.send(`Usuário não existe!<br>
                    Verifique os dados e tente novamente! <br>
                    <a href="/login">Voltar</a>`)
        }
    })
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true,
    });
});

router.post("/cadastro/novo", (req, res) => {
    // Coletar dados do formulário
    const email = req.body.email;
    const password = req.body.password;

    // Verificando se o usuário já existe
    Usuario.findOne({
        where: {
            email: email
        }
    }).then(usuario => {
        // Usuário não encontrado
        if(usuario == undefined){
            // Cadastra usuário
            // Gerando o HASH de senha
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            // Enviando para o banco de dados
            Usuario.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect("/login")
            }).catch(error => {
                console.log(`Erro ao criar a conta. Erro: ${error}`);
            })
            // Usuário já cadastrado
        } else {
            res.send(`Usuário já cadastrado! <br>
                Verifique os dados e tente novamente. <br>
                <a href="/login">Voltar</a>`)
        }
    })
});

export default router;