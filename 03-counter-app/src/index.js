import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#app');


ReactDom.render(<PrimeraApp saludo="Hola, Soy Goku"/>, divRoot);