import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifd fech', () => {
    
    test('debe de traer 10 elementos',async () => {
        
       const gifs = await getGifs('One Puch');

       expect(gifs.length).toBe(10);
    })
    

    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('');
 
        expect(gifs.length).toBe(0);
     })
})
