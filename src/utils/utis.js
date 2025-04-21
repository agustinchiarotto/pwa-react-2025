//async function obtenerPersonajes() {
//   try {
//     const respuesta = await fetch("https://swapi.dev/api/people");
//     const data = await respuesta.json();
//
//     data.results.forEach((personaje, index) => {
//       console.log(`${index + 1}. ${personaje.name} - Altura: ${personaje.height}cm`);
//     });
//   } catch (error) {
//     console.error("Error al obtener personajes:", error);
//   }
// }
//
// obtenerPersonajes();
