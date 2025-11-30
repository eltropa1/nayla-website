/**
 * Utilidad para limitar líneas de texto de manera compatible
 * 
 * @param {string} text - Texto a truncar
 * @param {number} maxLines - Número máximo de líneas
 * @param {number} maxHeight - Altura máxima en em
 * @returns {string} Texto truncado si es necesario
 */
export const truncateTextByLines = (text, maxLines = 2, maxHeight = 2.6) => {
  // Esta es una solución básica - en un caso real podrías usar
  // una librería o implementación más sofisticada
  const words = text.split(' ');
  let truncated = '';
  let lineCount = 0;
  
  for (let word of words) {
    truncated += word + ' ';
    // Estimación simple basada en longitud
    if (truncated.length > (maxLines * 50)) {
      truncated = truncated.trim() + '...';
      break;
    }
  }
  
  return truncated.trim();
}