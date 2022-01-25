import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodo";


describe('Pruebas en <TodoListItem/>', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[1]}
            i={0}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    )

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion delete', () => {
        //jest.fn()
        //toHaveBeenCalledWith
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de llamar la funcion Toggle', () => {
        //jest.fn()
        //toHaveBeenCalledWith
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        //contenido del parrafo
        //expect(wrapper.find('p').text()).toBe('1. ' + demoTodos[1].desc)
        expect(wrapper.find('p').text()).toBe(`1. ${demoTodos[1].desc}`)
    });

    test('debe de tener la clase complete', () => {
       
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={todo}
               
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);


    });








});
