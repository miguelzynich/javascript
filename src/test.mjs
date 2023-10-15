import ArrayCarros from './ArrayCarros.mjs';
import { carros } from './ArrayCarros.mjs';

// Verifique se os módulos foram importados corretamente
console.log('ArrayCarros:', ArrayCarros);
console.log('carros:', carros);

// Realize algumas operações com os dados exportados
const precos = carros.map(carro => carro.preco);
console.log('Preços dos carros:', precos);

const precoTotal = carros.reduce((total, carro) => total + carro.preco, 0);
console.log('Preço total dos carros:', precoTotal);

const carrosCaros = carros.filter(carro => carro.preco > 22000);
console.log('Carros caros:', carrosCaros);

carros.forEach(carro => {
    console.log(`Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
});
