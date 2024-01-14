/** Crie uma classe para representar carros
 * Os carros possuem uma marca, uma cor e um gasto médio de combústivel por Km rodado.
 * Crie um método que dado a quantidade de km e o preço de combústivel nos de o valor
 * gasto em reais para realizar esse percurso.
 */

class Carros {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    gastoDoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

const onix = new Carros('chevrolet', 'branco', 1 / 12.5);
console.log(onix.gastoDoPercurso(70, 5.35));