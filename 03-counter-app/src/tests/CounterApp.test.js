import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import CounterApp from "../CounterApp";

describe('PRueba para <CounterApp />', () => {
    
    let wrapper = shallow ( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow ( <CounterApp /> );
    })

    test('debe mostar <CounterApp /> correctamente ', () => {
        
        

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow (
            <CounterApp value={100}/>
        );

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toEqual('100');
    })

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    })
    
    
    test('debe de incrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });


    test('debe de colocar el valor por defecto con el boton reset', () => {
        const wrapper = shallow (<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');

    })
    
    
})
