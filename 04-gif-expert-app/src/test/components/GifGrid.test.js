import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { GifGrid } from '../../componentes/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba de <GifGrid/>', () => {

    const category = 'One Punch';
    

    test('debe mostrar el componente correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFecthGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url:'htpp:',
            title:'Cualquiera'
        },
    
        {
            id:'DFG',
            url:'htpp:',
            title:'Cualquiera'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category}/> );

       expect(wrapper).toMatchSnapshot();       
       expect(wrapper.find('p').exists()).toBe(false);
       expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
    
})
