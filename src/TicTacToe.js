import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './TicTacToe.css';

import App from './App';


export default function Square() {
    return (
      <>
        <button className="square">X</button>
        <button className="square">X</button>
      </>
    );
  }