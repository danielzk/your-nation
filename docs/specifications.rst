*********************************
Especificaciones de funcionalidad
*********************************

Sondeos
=======

Creación
--------

* Permitir a los Creadores crear sondeos con una pregunta, descripción
  (opcional), opciones de respuesta, ciudad (opcional), y fecha de
  finalización.
* Las opciones de respuesta pueden ser de una sola selección, múltiple
  selección o sí/no.
* Los sondeos pueden tener una duración máxima de 2 semanas a partir de su
  creación.
* Un Creador puede editar y eliminar sus propios sondeos, pero solo puede
  editarlos hasta 60 minutos después de su creación.
* Usar el país del usuario como país del sondeo.

Aplicación
----------

* Listar los sondeos ordenados por popularidad (más participantes).
* Permitir ordenar por popularidad o fecha de creación.
* Permitir filtrar por estado (activo/finalizado), país (por defecto el del
  usuario) y ciudad (por defecto ninguna/todas).
* Los usuarios pueden aplicar a un sondeo directamente en la lista de sondeos
  o en la vista de detalle.
* Las respuestas son anónimas, pero se require una cuenta en la plataforma para
  evitar la manipulación de sondeos.
* Permitir reportar un sondeo.
* Permitir compartir un sondeo.
* Permitir comentar un sondeo.
* Los comentarios solo aparecen en la vista de detalle del sondeo y no en la
  lista.
* Los Creadores no pueden aplicar a sus propios sondeos, pero pueden comentar.

Debates
=======

Creación
--------

* Permitir a los Creadores crear debates con un título/pregunta, texto y
  ciudad (opcional).
* Un Creador puede editar y eliminar sus propios debates.
* Usar el país del usuario como país del sondeo.

Aplicación
----------

* Listar los debates ordenados por comentario más reciente y fecha de creación.
* Los debates se cierran después de 1 mes de inactividad (ningún comentario
  nuevo)
* Los debates no se cierran si no hay más debates abiertos para un país.
* Permitir filtrar por país (por defecto el del usuario) y ciudad (por defecto
  ninguna/todas).
* Permitir reportar un debate.
* Permitir calificar un debate.
* Permitir compartir un debate.
* Permitir comentar un debate.

Políticos
=========

Creación
--------

* Permitir a los Creadores crear políticos con la siguiente información:

  - Nombre (obligatorio)
  - Apellido (obligatorio)
  - Foto (obligatorio)
  - Ciudad
  - Partido político
  - Cargo actual
  - Cargos anteriores
  - Es candidato

    - No (por defecto)
    - Sí

      - Cargo
      - Fecha de elección

  - Fecha de nacimiento
  - Acerca de (obligatorio)

* Políticos con más de 25 calificaciones pasan a tener edición protegida.
* Solo Guardianes pueden editar un político con edición protegida.
* Un Creador puede editar políticos de su país que no tengan edición protegida.
* Solo miembros del Staff pueden eliminar políticos.
* Si el político es candidato, cambiar su estado a "No" al día siguiente de la
  fecha de elección y enviar una notificación al Creador de la versión más
  reciente para actualizar su información.
* Usar el país del usuario como país al crear un político.

Presentación
------------

* Listar políticos por orden de popularidad (cantidad de calificaciones y
  comentarios) y candidatos primero.
* Permitir ordenar por más populares, menos populares, más queridos y menos
  queridos.
* Permitir filtrar por país (por defecto el del usuario), ciudad (por defecto
  ninguna/todas) y por "Es candidato" (por defecto todos).
* Permitir buscar políticos.
* Permitir reportar un político.
* Permitir calificar un político.
* Permitir compartir un político.
* Permitir comentar un político.
* En la vista de detalle mostrar un botón para reportar información
  desactualizada.

Partidos
========

Creación
--------

* Permitir a los Creadores crear partidos con la siguiente información:

  - Nombre (obligatorio)
  - Foto
  - Acerca de (obligatorio)
  - Partidos aliados

* Partidos con más de 25 calificaciones pasan a tener edición protegida.
* Solo Guardianes pueden editar un partido con edición protegida.
* Un Creador puede editar partidos de su país que no tengan edición protegida.
* Solo miembros del Staff pueden eliminar partidos.
* Usar el país del usuario como país al crear un partido.

Presentación
------------

* Listar partidos por orden de popularidad (cantidad de calificaciones y
  comentarios).
* Permitir ordenar por más populares, menos populares, más queridos y menos
  queridos.
* Permitir filtrar por país (por defecto el del usuario).
* Permitir buscar partidos.
* En la vista de detalle incluir los políticos del partido.
* Permitir buscar partidos.
* Permitir reportar un partido.
* Permitir calificar un partido.
* Permitir compartir un partido.
* Permitir comentar un partido.
* En la vista de detalle mostrar un botón para reportar información
  desactualizada.

Comentarios
===========

* Los comentarios se utilizan en sondeos, debates, políticos y partidos.
* Permitir reportar un comentario.
* Permitir calificar un comentario.
* Permitir compartir un comentario.
* Permitir responder un comentario raiz.
* Las respuestas de un comentario no pueden anidarse pero pueden mencionar a
  otros usuarios.
* Listar comentarios destacados en una sección de la plataforma.

Calificaciones
==============

* Las calificaciones se utilizan en sondeos, debates, políticos, partidos y
  comentarios.
* Las calificaciones consisten en las opciones "Me gusta" y "No me gusta".

Reportes
========

* Permitir al usuario reportar un contenido con las siguientes opciones:

  - Spam
  - Información falsa
  - Violenta/ofensiva
  - Otro

* Permitir agregar un comentario adicional.
* Un miembro del Staff debe revisar el reporte y cerrarlo cuando finalice.

Creadores
=========

* Un usuario si desea puede volverse Creador cuando alcanza 10 comentarios en
  la plataforma.
* Los Creadores pueden crear sondeos, debates, políticos y partidos.
* Los Creadores pueden editar publicaciones que no tengan edición protegida.

Guardianes
==========

* Un usuario si desea puede volverse Guardián cuando alcanza 10 publicaciones
  en la plataforma.
* Los Guardianes tienen los mismos permisos que los Creadores.
* Los Guardianes pueden editar publicaciones con edición protegida.

Registro y autenticación de usuarios
====================================

* Permitir autenticarse con Facebook (en el futuro se pretende usar número
  telefónico).
* Usar geolocalización para definir el país y ciudad.
* Generar nick en base al nombre y apellido en Facebook, agregar números al
  final si el nick ya existe.

Perfil de usuario
=================

* Permitir actualizar la información del usuario autenticado:

  - Nick
  - País
  - Ciudad (opcional)
  - Contraseña

* Actualizar el país y ciudad cuando se cambian en los filtros principales de
  la plataforma.

Contacto
========

* Permitir a los usuarios enviar un mensaje de contacto al Staff a través de
  un formulario con los siguientes campos:

  - Email
  - Asunto (opcional)
  - Mensaje

* Notificar a miembros autorizados del Staff cuando hay un nuevo mensaje.
