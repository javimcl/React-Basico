import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import { GifGridItem } from '../../componentes/GifGridItem'


describe('Prueba para <GifGridItem/>', () => {


    const title = 'Un titulo';
    const url = 'http';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);



    test('Debe mostrar el componente correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y al de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animatr__fadeIn', () => {
        const div = wrapper.find('div');
        //console.log(div.props());
        //console.log(div.prop('className'));

        const className = div.prop('className');


        expect(className.includes('animate__fadeIn')).toBe(true);
    })



})
