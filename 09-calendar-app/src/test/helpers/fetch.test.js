import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

let token;
describe('Pruebas en el helper Fetch', () => {
    test('fetch sin token debe de funcionar', async () => {
        const resp = await fetchSinToken('auth', { email: 'nando@gmail.com', password: '123456' }, 'POST');

        //  expect(resp instanceof Response).toBe(true);

        const body = await resp.json();

        expect(body.ok).toBe(true);
        token = body.token;

    })


    test('fectch sin token debe de funcionar', async () => {
        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/5dfgoibiooijijjoioi', {}, 'DELETE');
        const body = await resp.json();

        expect(body.msg).toBe('HABLE CON EL ADMINISTRADOR')

    })
})