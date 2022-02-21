import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";




cloudinary.config({
    cloud_name: 'dxu4va113',
    api_key: '179642433472282',
    api_secret: 'g6Ng9-n5vcCLRUYK4lx4i85NWXs',

});

describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar el url', async (done) => {

        const resp = await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PPsaYSvsbbw5QfEhqrPN0jeeFi9q0r1vbQ&usqp=CAU');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        // console.log(url);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png','');
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    })



    test('debe de retornar un error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    })
})