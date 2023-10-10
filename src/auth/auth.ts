function authenticate(usuario: string, senha: string): boolean {
    return usuario === 'admin' && senha === '1234';
  }
  
  export { authenticate };