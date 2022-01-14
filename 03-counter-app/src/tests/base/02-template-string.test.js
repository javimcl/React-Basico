import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string.js', () => {
    
    test('Prueba en el metodo getSaludo', () => {
        
        const nombre = 'Javier';

       const saludo = getSaludo(nombre)

       expect(saludo).toBe('Hola ' + nombre + '!');
       console.log(saludo)
    })

    //GetSaludo debe retornar Hola Carlos! si no hay argumentos

    test('GetSaludo debe retornar Hola Carlos! si no hay argumentos', () => {
        
        const nombre = 'Carlos';

       const saludo = getSaludo()

       expect(saludo).toBe('Hola ' + nombre + '!');
       console.log(saludo)
    })
    
})


