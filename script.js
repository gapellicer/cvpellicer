// Obtener el botón "Imprimir en PDF"
const printButton = document.getElementById('print-button');

// Agregar el evento click al botón
printButton.addEventListener('click', () => {
  // Crear una nueva instancia de jsPDF
  const doc = new jsPDF();

  // Agregar el contenido del currículum a la instancia de jsPDF
  doc.fromHTML(document.body);

  // Guardar el archivo PDF
  doc.save('Mi_Curriculum.pdf');
});