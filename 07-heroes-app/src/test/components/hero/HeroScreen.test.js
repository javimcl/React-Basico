import { mount } from "enzyme";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

import { types } from "../../../types/types";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas en <HeroScreen/>', () => {

    test('no debe de mostrar el HeroScreen si no hay un heroe en la memoria', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroScreen/>}/>
                    <Route path='/' element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    });

    test('no debe de mostrar el HeroScreen si no hay un heroe en la memoria', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>}/>
                    <Route path='/' element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        //expect(wrapper.find('h1').text().trim()).not.toBe('No Hero Page');

        expect(wrapper.find('.row').exists()).toBe(true)
    });


    test('debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>}/>                    
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(mockNavigate).toHaveBeenCalledWith(-1)
    });
    

    test('debe de mostrar el NO Hero Page si no tenemos un heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>}/>
                    <Route path='/' element={<h1>No Hero Page</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('No Hero Page');

        
    });

});
