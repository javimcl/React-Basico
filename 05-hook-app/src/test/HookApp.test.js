import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { HookApp } from "../HookApp";


describe('Prueba de Hook App', () => {
    test('Prueba correctamente', () => {
        const wrapper = shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();
    });

});
