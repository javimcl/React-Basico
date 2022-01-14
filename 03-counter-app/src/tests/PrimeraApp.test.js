import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {

    //     const saludo = 'Hola, soy Goku';

    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>);

    //     //wrapper.getByText()

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp/> correctamente', () => {

        const saludo = 'Hola mundo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
            <PrimeraApp 
                saludo= { saludo }
                subtitulo = { subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );

    })
    


})
