import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/reset.css'; // Primeiro o reset/biblioteca
import './theme.less';        // Depois o seu tema (sobrescreve o que for necessário)
import App from './App.jsx'   // Por fim os componentes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
