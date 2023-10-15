// ArrayCarros.mjs
import { carros } from './carros.mjs';

const precos = carros.map(carro => carro.preco);
console.log(precos);

const precoTotal = carros.reduce((total, carro) => total + carro.preco, 0);
console.log(precoTotal);

const carrosCaros = carros.filter(carro => carro.preco > 22000);
console.log(carrosCaros);

carros.forEach(carro => {
    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
});

console.log()
