import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {

    test('Debe retirnar un heroes por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        //console.log(heroe);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        //console.log(heroe);

        expect(heroe).toBe(undefined);
    });


    test('Debe retornar un arreglo de heroees', () => {

        const owner = 'DC';
        const lista = getHeroesByOwner(owner);

        const arre = heroes.filter( (h) => h.owner === owner )

        expect(lista).toEqual(arre);
    });


    test('Debe retornar el numero de heroes', () => {

        const owner = 'Marvel';
        const lista = getHeroesByOwner(owner);

        const arre = heroes.filter( (h) => h.owner === owner )

        expect(lista.length).toBe(arre.length);
    });

})
