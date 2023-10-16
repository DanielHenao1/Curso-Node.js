// Módulos nativos en Nodejs

// fs
// Módulo utilizado para manejo de archivos
// Sirve para manejar otro modelo de persistencia.

// crypto
// Permite hacer operaciones de encriptación y cifrado para información sensible
// Sirve para mejorar la seguridad de los datos

// http
// Permite crear un servidor básico bajo el protocolo http
// Sirve para crear nuestro primer servidor de solicitud/respuesta

// path
// Permite el correcto manejo de rutas
// Sirve para evitar ambigüedad al trabajar con rutas

// Para iniciar un proyecto iniciamos (npm init -y)
// Para instalar un modulo npm install modulo_a_instalar
// Para instalar dependencias npm install modulo_a_instalar (-D) o (--save)
// Para utilizar nodemon debemos poner un script "scripts": "dev": "nodemon index.js",
// Si no queremos instalar nodemon podemos utilizar node --watch index.js este comando es nativo de node

// Para trabajar con dependencias necesitamos:
// Paso 1:  Tener un proyecto vacío para trabajar
// Paso 2:  Correr el comando npm init
// Paso 3: Correr el comando npm install nombre_del_modulo
// Paso 4: Utilizar el nuevo módulo instalado.

// Para verificar nuestras dependencias utilizamos (npm outdated) 
// Para actualizar una version de una dependencia utilizamos (npm update)