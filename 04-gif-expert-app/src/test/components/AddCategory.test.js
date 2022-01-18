import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { AddCategory } from "../../componentes/AddCategory"



describe('Pruebas <AddCategory>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('no debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';
        //1. simular el inputchange
        wrapper.find('input').simulate('change', { target: { value } });
        //2. similar el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        //3. setCategories se debe llamar
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //4. el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })




})
