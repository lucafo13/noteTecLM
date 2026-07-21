import jwt from 'jsonwebtoken'

const { TOKEN } = process.env

function auth (req, res, next) {
    try {
        const userToken = req.cookies.token
        
        if(!userToken){
            return res.status(404).json({mensagem: "sem token sem beaches"})
        }

        const descodegacao = jwt.verify(userToken, TOKEN)
        
        req.user = descodegacao;

        next()

    } catch (error) {
        return res.status(404).json({a: "nao foi possivel realizar ação"})
    }
}
export default auth