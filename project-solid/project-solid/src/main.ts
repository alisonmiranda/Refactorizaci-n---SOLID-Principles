import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró el contenedor #app.');
}

app.innerHTML = `
  <main style="padding: 2rem; font-family: Arial, sans-serif;">
    <h1>CleanCode y SOLID</h1>
    <p>La refactorización está lista para revisar la arquitectura y la resiliencia transaccional del sistema.</p>
  </main>
`;

