import { renderHook, act } from '@testing-library/react-hooks';

import { useCounter } from "../../hooks/useCounter";


describe('Use counte', () => {
    test('debe de retornar los valor por defecto', () => {
        const { result } = renderHook(() => useCounter());

        //  console.log(result.current);

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('debe de retornar el counte en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100);  
    });

    test('debe de incrementar el counte en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment} = result.current;
        act(() => {
            increment();
        });
        const {counter} = result.current;
        expect(counter).toBe(101);
    });

    test('debe de decrementar el counte en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;
        act(() => {
            decrement();
          
        });
        const {counter} = result.current;
        expect(counter).toBe(99);
    });

    test('debe de reset el counte en 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            reset();
        });
        const {counter} = result.current;
        expect(counter).toBe(100);
    });
    

});
