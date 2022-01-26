import { render } from "@testing-library/react";
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { useContext } from "react";
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name: 'Javier',
        email: 'javier@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('deberia de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
