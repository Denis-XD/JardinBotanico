# Jardín Botánico

Descripción del proyecto...

## Configuración del Entorno

Para ejecutar este proyecto localmente, debes seguir los siguientes pasos:

1. Clonar el repositorio:

git clone url_del_repositorio


2. Instalar las dependencias:

cd server
npm install


3. Configurar las variables de entorno:
- Copia el archivo `.env.example` a un nuevo archivo `.env`.
- Completa las variables de entorno en `.env` con tus credenciales locales.

4. Ejecutar las migraciones:


npx knex migrate:latest


5. Iniciar el servidor:

npm start

## Variables de Entorno

Este proyecto utiliza las siguientes variables de entorno:

- `DB_HOST`: Host de la base de datos.
- `DB_USER`: Usuario de la base de datos.
- `DB_PASSWORD`: Contraseña de la base de datos.
- `DB_NAME`: Nombre de la base de datos.

