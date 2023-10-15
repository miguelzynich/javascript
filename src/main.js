import carros from './carros.mjs';

console.log(carros);

const precoLimite = 23000;
const carrosCaros = carros.filter(carro => carro.preco > precoLimite);
console.log('Carros mais caros que $' + precoLimite);
console.log(carrosCaros);

const precos = carros.map(carro => carro.preco);
const precoMedio = precos.reduce((total, preco) => total + preco, 0) / carros.length;
console.log('Preço médio dos carros: $' + precoMedio);
