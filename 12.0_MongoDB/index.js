// Con esto instalamos en nuestro pc mongodb
// https://www.mongodb.com/try/download/community

// Instalamos MondoDB Community Server

// en Tools instalamos Mongodb Shell

// C:\Program Files\MongoDB\Server\7.0\bin en esta ruta instalamos mongosh.exe

// Despues de esto vamos a variables de entorno y agregamos el siguiente path
// c:\Program Files\MongoDB\Server\7.0\bin

// Creamos en disco C: una carpeta Data y dentro de esta una carpeta db

// para probar que quedo bien configurado:
// En una teminal escribimos mongod, esto debe arrancarnos el servidor

// para ver la version de mongo utilizamos mongod --version

// para ver la version tambien podemos utilizar mongosh

// show databases = para ver las bases de datos que tengo en mi mongo

// db = para saber en que base de datos me encuentro

// use + (nombre de la base de datos) = para cambiar de base de datos

// use + nombre = Tambien nos sirve para crear una base de datos

// show collections = para ver las colecciones que tengo en mi base de datos

// db.createCollection('users') = para crear una coleccion

// show collections = para ver las colecciones que tengo en mi base de datos

// db.users.insertOne({name: 'Daniel', age: '40'}) = para insertar datos en mongo

// db.users.insertMany(array) = para insertar varios datos en mongo

// db.users.find({name: 'Samuel'}) = para buscar datos especificos en mongo

// <-------------------------- comandos Mongodb ------------------------------>

//- Comandos:

//coll es igual al nombre de la collection

//show dbs ---> Muestra las bases de datos creadas

//use mibase ---> Cambia a la base de datos mibase y si no existe la crea y automáticamente hace un switched a la base de datos creada

//db: Muestra en que base de datos estamos

//db.coll.insert({nombre: 'Luis', edad: 36}): Crea un colección con los datos que le pasamos en el objeto

//db.coll.find(): Muestra el resultado de los objetos insertados dentro de la colección de usuarios que creamos en el paso anterior

//show collections: Muestra la lista de conexiones creadas

//load:  Carga un script de comandos

//db.coll.drop() : borra una colección y sus índices respectivos.
//db.dropDatabase() : elimina la base de datos actual.
//db.createCollection("contacts") : crea una colección en forma explícita.
//db.coll.stats() : refleja estadísticas del uso de la base.
//db.coll.storageSize() : tamaño de almacenamiento de la colección.
//db.coll.totalIndexSize() : tamaño total de todos los índices de la colección.
//db.coll.totalSize(): tamaño total en bytes de los datos de la colección más el tamaño de cada índice de la colección.
//db.coll.validate({full: true}) : comprueba la integridad de una colección.
//db.coll.renameCollection("new_coll", true) : renombra una colección, el  2do parámetro para borrar la colección destino si existe.

// Comando de create (insert) y read (find)

//db.coll.insertOne( {key:value} ) : inserta un documento en la colección.
//db.coll.insert( {key:value} ) : inserta un documento en la colección (en desuso).
//db.coll.insertMany( [ {key:value}, {key:value}, {key:value} ] ) : inserta un array de documentos la colección en modo Bulk.
//db.coll.findOne() : busca un documento dentro de una colección.
//db.coll.find() : busca todos los documentos dentro de una colección.
//db.coll.find( {key:value} ) : busca los documentos dentro de una colección que satisfacen el filtro de búsqueda.
//db.coll.find().pretty() : devuelve todos los documentos conservando el formato de objeto de salida.

// Comandos contadores

// db.coll.estimatedDocumentCount(): Devuelve la cantidad total de documentos encontrados en la colección.
// db.coll.countDocuments( {key: val} ): Devuelve la cantidad de documentos encontrados en la colección (con filtro de query).

// Comando read con filtros

// db.coll.find( {key: {$operator: val}} ) : devuelve los documentos según el operador de filtro utilizado.

// Operadores para Filtros de Query

// $and : Realiza operación AND -> sintaxis: {$and: [ {},{} ] }
//$or : Realiza operación OR -> sintaxis: {$or: [ {},{} ] }
//$lt : Coincide con valores que son menores que un valor especificado.
//$lte : Coincide con valores menores o iguales a un valor especificado.
//$gt : Coincide con valores mayores a un valor especificado.
//$gte : Coincide con valores mayores o iguales a un valor especificado.
//$ne : Coincide con valores que no son iguales a un valor especificado.
//$eq : Selecciona los documentos que son iguales a un valor especificado.
//$exists : Selecciona los documentos según la existencia de un campo.
//$in : Selecciona los documentos especificados en un array.
//sintaxis: {key:{$in: [array of values] } }
//$nin : Coincide con ninguno de los valores especificados en un array.
//$size : Coincide con el número de elementos especificados.
//$all : Coincide con todos los valores definidos dentro de un array.
//$elemMatch : Coincide con algún valor definido dentro del query.

// Búsqueda avanzada

//db.coll.distinct( val ): devuelve un array con los distintos valores que toma un determinado campo en los documentos de la colección.

//db.coll.find({doc.subdoc:value}): Se utiliza para filtrar subdocumentos.

//db.coll.find({name: /^Max$/i}): filtra utilizando expresiones regulares

// Update y delete

//db.collection.updateOne(query, update, options)
//query: especifica el filtro de documentos a ser actualizados.
//update: contiene los datos a ser actualizados con sus operadores respectivos: $set, $unset, $inc, $rename, $mul, $min, $max, etc.
//options: contiene varias opciones para la actualización, entre ellas:
//upsert (true ó false) : Es una opción para hacer un insert en caso de que el registro no exista.
//db.coll.updateMany(query, update, options)
//Igual que el anterior, pero hace una actualización múltiple en caso de que el filtro de query devuelva varios resultados.

//$set, $unset, $inc, $rename, $mul, $min, $max, etc. (Buscar en la documentación de mongodb)

//db.coll.deleteOne( {key: val} ): Elimina un sólo documento (el primero) que coincide con el filtro especificado.
//db.coll.deleteMany( {key: val} ): Elimina todos los documentos que coinciden con el filtro especificado.
//db.coll.remove( {key: val} ): Elimina documentos de una colección.
//db.coll.findOneAndDelete( filter, options ): Elimina un solo documento según el filtro y los criterios de clasificación. Algunas de las options pueden ser
//- sort: para establecer orden para el filtro
//- projection: para elegir campos de salida.

//- Para modificar los array dentro del documento utilizar los métodos $push (para insertar elementos) $pull (para eliminar elementos con parámetros condicionales) $pop, $slice, $each
