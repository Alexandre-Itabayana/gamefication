function authenticate(usuario, senha){
    return usuario === 'admin' && senha === '1234'
}

module.exports = {
    authenticate
}