import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";


describe('Pruenas en <RealExample/>', () => {
  test('debe mostrarse correctamente', () => {
      const wrapper = shallow(<RealExampleRef/>)

      expect(wrapper).toMatchSnapshot();
    
  });

  test('debe de mostrar el componente <multipleCusmo/>', () => {
    
  });
  
  
});
