import { getDefaultNormalizer } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';


describe('Pruebas en use Form', () => {
  const initialForm ={
      name: 'Javier',
      email: 'javier@gmail.com'
  }

  test('debe regresar un formulario por defecto', () => {
    const { result } = renderHook(()=> useForm(initialForm));

    const [formValues, handleInputChange, reset ] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');

  });

  test('debe de cambiar el valor del formulario cambiar name', () => {
    const { result } = renderHook(()=> useForm(initialForm));
    const [, handleInputChange ] = result.current;

    act(() => {
        handleInputChange({
            target: {
                name: 'name',
                value: 'value'
            }
        });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: 'value'})
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook(()=> useForm(initialForm));
    const [, handleInputChange, reset ] = result.current;

    act(() => {
        handleInputChange({
            target: {
                name: 'name',
                value: 'value'
            }
        });

        reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm)
  });
  
  
  
});
