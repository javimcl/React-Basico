import { render } from "@testing-library/react";
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <LoginScreen/>', () => {

   const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>

            <LoginScreen />
        </UserContext.Provider>

    )

    test('debe de mostrarse correctamecte', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento', () => {
      
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Javier'
        })
        
    });
    

});
