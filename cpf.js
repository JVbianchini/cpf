// Função para validar CPF
function validarCPF(cpf) {
    // Remove caracteres não numéricos (pontos e traços)
    cpf = cpf.replace(/[^\d]+/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Não permite CPFs com todos os números iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Valida o primeiro dígito verificador
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * peso--;
    }

    let digito1 = 11 - (soma % 11);
    if (digito1 === 10 || digito1 === 11) {
        digito1 = 0;
    }

    if (parseInt(cpf.charAt(9)) !== digito1) {
        return false;
    }

    // Valida o segundo dígito verificador
    soma = 0;
    peso = 11;
    
