import { getHeroesById } from "./bases/08-imp-exp";




/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Tarea
        //impo
        const heroe = getHeroesById(3);
        console.log(heroe);
       resolve(heroe);
    }, 2000)
});

promesa.then( (heroe) => {
    console.log('heroe', heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const p1 = getHeroesById(3);
            if (p1) {
                reject(p1);
            } else {
                reject('No se puedo encontrar el heroe')
            }
            // console.log(p1);
            // resolve(p1);
        }, 2000)
    });
}

getHeroeByIdAsync(3)
    .then(console.log())
    .catch(console.warn())