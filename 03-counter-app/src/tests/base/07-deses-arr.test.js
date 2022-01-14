import { retornaArreglo } from "../../base/07-deses-arr"


describe('Pruebas en desestructuracion', () => {
    
    test('DEbe retornar un string y un numero', async () => {
        
       // const arr = retornaArreglo();
      //  expect(arr).toEqual('ABC',123)

        const [letras, numeros] = retornaArreglo();

        console.log(typeof letras);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
    
})
