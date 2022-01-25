import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodo";



describe('Pruebas en todoReducer', () => {

    test('debe de retornan el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        }

        const action =  {
            type: 'add',
            payload: newTodo

        }

        const state = todoReducer(demoTodos, action);
        

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
      
    });

    test('debe de borrar un TODO', () => {

        const action =  {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]])
      
    });

    test('debe de hacer el TOGGLE del TODO', () => {
        const action =  {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer(demoTodos, action);
        
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });
    
    

});
