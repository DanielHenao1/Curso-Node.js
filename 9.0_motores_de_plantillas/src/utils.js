import { dirname } from "path"; // Importa la función "dirname" del módulo "path".
import { fileURLToPath } from "url"; // Importa la función "fileURLToPath" del módulo "url".

// La siguiente línea crea una constante llamada "__dirname" que representa la ubicación del directorio actual del archivo en el que se encuentra este código. Esto es útil para referenciar archivos y directorios de forma relativa.
export const __dirname = dirname(fileURLToPath(import.meta.url));

// Desglose de la línea anterior:
// - "import.meta.url" obtiene la URL del módulo actual.
// - "fileURLToPath" convierte la URL en una ruta de archivo en el sistema de archivos.
// - "dirname" obtiene el directorio principal de la ruta del archivo, lo que resulta en la ubicación del directorio actual.

// console.log(__dirname); // Con esto sabriamos cual es nuestra ruta absoluta
