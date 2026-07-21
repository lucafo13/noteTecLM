import bcrypt from 'bcrypt'


const novaSenha = "Razumikhin34"
const saca = async() => {
const hash = await bcrypt.hash(novaSenha, 10)
return hash
}
saca().then((hash) => {
    console.log(hash)
})