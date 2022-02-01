import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";



describe('Pruebas en <Navbar/>', () => {
    const contextInitial = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true

        }
    }

    const wrappper = mount(
        <AuthContext.Provider value={contextInitial}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>

    );

    test('debe de mostrar correctamente', () => {
       
        expect(wrappper).toMatchSnapshot();
        expect(wrappper.find('.text-info').text().trim()).toBe('Pedro');
    });

    test('debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        


        wrappper.find('button').simulate('click');
    });


});
