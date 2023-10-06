import React from "react";

import { createRoot } from "react-dom";

function App() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación de React 18</h1>
      {/* Otros componentes de React aquí */}
    </div>
  );
}

// Obtén una referencia a la raíz de la aplicación en el elemento con id "root"
const root = document.getElementById("root");

// Usa la API de Portales para renderizar la aplicación en el elemento raíz
const reactRoot = createRoot(root);
reactRoot.render(<App />);
