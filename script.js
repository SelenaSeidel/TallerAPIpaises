let indice = 0; // Índice del país actual
let paises = []; // Array que almacenará los países

// Cargar la lista de países desde la API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    paises = data;
    Mostrar(indice); // Muestra el primer país
  })
  .catch(error => {
    console.error('Error al cargar los países:', error);
  });

// Función para mostrar el país en el contenedor
function Mostrar(indice) {
  const pais = paises[indice];
  const contenedor = document.getElementById('contenedor');
  contenedor.innerHTML= `
    <div class="pais">
      <p>${pais.name.common}</p>
      <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.common}">
    </div>
  `;
}

// Evento del botón "Siguiente País"
document.getElementById('nextBtn').addEventListener('click', () => {
  indice+=1;
  if (indice >= paises.length) {
    indice = 0; // Vuelve al primer país cuando se acaba la lista
  }
  Mostrar(indice); // Muestra el siguiente país
});