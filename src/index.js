import React from 'react';
import ReactDOM from 'react-dom';
// componentes
// import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'
// Estilos
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById('app');
ReactDOM.render(
  <Badges />,
  container
);


// ReactDOM.render(element << que contiene, container << donde lo va contener)
