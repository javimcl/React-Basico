import { render } from "@testing-library/react";
import { shallow, mount } from 'enzyme';
import '@testing-library/jest-dom';
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <AppRouter/>', () => {

    const user = {
        id: 1,
        name: 'Javier'
    }
    const wrapper = mount(

        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    });

});
