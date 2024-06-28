# Moviefy

_Trabajo Práctico para la materia Aplicaciones Interactivas._

> Descubrí, buscá y organizá tus películas favoritas de manera fácil y divertida. Creá listas personalizadas para tus próximas noches de cine, llevá un registro de las que ya hayas visto y guardá esas películas que te encantaron en una lista de favoritas. ¡Tu experiencia cinematográfica empieza en Moviefy!

## Índice

1. [Live Demo](#live-demo)
2. [Deplegar el Proyecto](#desplegar-el-proyecto)
   - [Requisitos previos](#requisitos-previos)
   - [Clonar el repositorio](#clonar-el-repositorio)
   - [Configurar y desplegar el backend](#configurar-y-desplegar-el-backend)
   - [Configurar y desplegar el frontend](#configurar-y-desplegar-el-frontend)
3. [Requerimientos de la Aplicación](#requerimientos-de-la-aplicación)
   - [Frontend](#frontend)
   - [Backend](#backend)
4. [Documentación de la API](#documentación-de-la-api)
5. [Diagrama de la Base de Datos](#diagrama-de-la-base-de-datos)
6. [Autores](#autores)

## Live Demo

> [!NOTE]
> La aplicación puede tardar hasta más de 1 minuto en iniciar la primera vez.

Para acceder a una demostración, ingresá al siguiente enlace:

https://my-moviefy.vercel.app

## Desplegar el Proyecto

### Requisitos previos

- Node.js
- npm
- MongoDB

### Clonar el repositorio

Clona el repositorio completo con el frontend y el backend:

```bash
git clone https://github.com/fedeberro/moviefy.git
```

### Configurar y desplegar el backend

1. Dentro del directorio del backend, instalar las dependencias:

```bash
cd moviefy-backend
npm install
```

2. Configurar las variables de entorno:

   - Copiar el archivo `.env.example` a `.env`.
   - Editar el archivo `.env` con las credenciales de la base de datos, api key y secret proporcionados.

3. Iniciar la aplicación:

```bash
npm run dev
```

> [!IMPORTANT]
> Esto inicia la aplicación en el puerto 3001 (por defecto).

### Configurar y desplegar el frontend

1. Dentro del directorio del frontend, instalar las dependencias:

```bash
cd moviefy-frontend
npm install
```

2. Configurar las variables de entorno:

   - Copiar el archivo `.env.example` a `.env`.

3. Iniciar la aplicación:

```bash
npm run dev
```

> [!IMPORTANT]
> Esto inicia la aplicación en el puerto 3000 (por defecto).

## Requerimientos de la Aplicación

La aplicación fue desarrollada utilizando el stack MERN (MongoDB, Express, React, Node.js).

### Frontend

Para la parte del frontend se utilizó [React](https://react.dev) como librería principal, utilizando TypeScript y algunas dependencias externas (redux, react-router, tailwind, zod, etc). Los componentes y estilos de la aplicación provienen, en su mayor parte, de la librería [shadcn/ui](https://ui.shadcn.com).

Entre los requerimientos principales que cumple la aplicación se encuentran:

- ✔️ Registro de usuarios, con nombre de usuario, email y contraseña
- ✔️ Envío de email para verificar la dirección de email del usuario
- ✔️ Inicio de sesión de un usuario registrado
- ✔️ Buscar películas y personas utilizando una barra de búsqueda
- ✔️ Buscar películas filtradas por género
- ✔️ Descubrir películas en tendencias
- ✔️ Ver el detalle de las películas (actores, comentarios, etc)
- ✔️ Agrupar películas en listas privadas para cada usuario: `watchlist`, `vistas` y `favoritas`
- ✔️ Posibilidad de reiniciar la contraseña mediante el email
- ✔️ Aplicación completamente responsive para su uso en diferentes dispositivos

### Backend

Para la parte del backend se utilizó [Express](https://expressjs.com) y [Node.js](https://expressjs.com), agregando algunas dependencias externas (zod, bcrypt, jwt, nodemailer, etc). La base de datos utilizada es MongoDB, utilizando [Mongoose](https://mongoosejs.com) como ODM y desplegada en [MongoDB Atlas](https://www.mongodb.com). Para obtener la información de las películas y permitir la búsqueda de las mismas, se utilizó la API externa [TMDB](https://www.themoviedb.org) (The Movie Database)

Se implementó la utilización de [JWT](https://jwt.io) para crear los token de acceso para autenticar a los usuarios y proteger las rutas. Además, se utilizó la librería `nodemailer` para enviar emails a los usuarios para que puedan verificarse y reiniciar su contraseña.

Entre los requerimientos principales que cumple la aplicación se encuentran:

- ✔️ Persistencia de datos en una base de datos
- ✔️ Encriptación de la contraseña del usuario
- ✔️ Validación de datos con la librería `zod`
- ✔️ División de la aplicación en capas

## Documentación de la API

Para acceder a la documentación de los endpoints, ingresá al siguiente enlace:
https://documenter.getpostman.com/view/19635484/2sA3dsntnp#c4cdc1e4-6b34-4e3b-9a7e-d7c3ac7443b5

## Diagrama de la Base de Datos

![image](https://github.com/fedeberro/moviefy/assets/100092933/c3ef390e-4a84-4f50-ad60-d08b5913b756)

## Autores

- @fedeberro - Federico Berro
- @jorgestilli - Jorge Stillisano
- @alvafg - Álvaro Fernandez Guyot
