describe('Pruebas en el archivo demo.test', () => {

    // test('debe de ser true ', () => {
    //     // const isActive = true;

    //     // if (isActive) {
    //     //     throw new Error('No esta activo')
    //     // }
    // })

    test('deben de ser iguales los string', () => {
        //1. Inicializacion
        const mensaje = 'Hola Mundo';
        //2. estimulo
        const mensaje2 = 'Hola Mundo'

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); //===

    })

});

