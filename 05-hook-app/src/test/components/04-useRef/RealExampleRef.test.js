import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Pruenas en <RealExample/>', () => {

  const wrapper = shallow(<RealExampleRef/>);

  test('debe mostrarse correctamente', () => {

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    
  });

  test('debe de mostrar el componente <multipleCusmo/>', () => {

    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    

  });
  
  
});
