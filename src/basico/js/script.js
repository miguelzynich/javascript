class Calculadora {
    constructor(notas) {
        this.notas = notas;
    }

    media() {
        let valores = this.notas;
        let media = 0;
        let c = 0;
        let soma = 0;
        for (c = 0; c < valores.length; c++) {
            soma += valores[c];
        }

        media = soma / valores.length;

        return media;
    }

    aprovacao() {
        let valor = this.media();
        if (valor >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

// Função Recursiva
function contagemRegressiva(numero) {
    console.log(numero);
    let proximoNumero = numero - 1;
    if (proximoNumero > 0) {
        contagemRegressiva(proximoNumero);
    }
}

// Formulário envio de dados para cálculo da média

const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        if (formulario1.getAttribute('class') && formulario1.getAttribute('class').match(/erro/)) {
            return false;
        }

        const dados = new FormData(formulario1);
        const notas = [];

        for (let key of dados.keys()) {
            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número
            if (!isNaN(numero)) {
                notas.push(numero);
            }
        }

        console.log(notas);

        const calculadora = new Calculadora(notas);
        const texto = calculadora.aprovacao();

        document.getElementById('resultado').innerHTML = texto;
    });
} else {
    console.error("Elemento com ID 'formulario-01' não encontrado no DOM.");
}

const formulario = document.getElementById('formulario-02')

function validaCampo(elemento) {
    elemento.addEventListener('focusout', (event) => {
        event.preventDefault();

        if (elemento.value == "") {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            elemento.classList.add('erro');
            elemento.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            elemento.classList.remove('erro');
            elemento.parentNode.classList.remove('erro');
        }

        // Validar o campo de nome aqui
        if (elemento.id === 'nome') { // Substitua 'nome' pelo ID do seu campo de nome
            const nome = elemento.value;
            const regexNome = /^[a-zA-Z\s]*$/; // Esta expressão permite apenas letras e espaços

            if (!regexNome.test(nome)) {
                document.querySelector('.mensagem').innerHTML = "Nome inválido. Use apenas letras e espaços.";
                elemento.classList.add('erro');
                elemento.parentNode.classList.add('erro');
                return false;
            }
        }
    });
}

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposEmail = document.querySelectorAll('input.email');

for (let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for (let emFoco of camposEmail) {
    validaEmail(emFoco);
}
