import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('PRuebas en <Dashboard/>', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Javier'
        }
    }

    test('debe de mostrarse correctamente - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Javier')
    });

    test('debe de mostrarse correctamente - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC screen')
    });

    
});
