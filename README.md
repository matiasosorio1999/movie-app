# Movie App

Esta es una aplicación de búsqueda de películas construida con Next.js y TypeScript. La aplicación permite a los usuarios buscar películas por título y año, y ver los detalles de cada película.

## Características

- Buscar películas por título y año
- Ver una lista de resultados de búsqueda con imagen, título y calificación
- Ver detalles completos de una película seleccionada, incluyendo descripción, director, actores, etc
- Uso de Tailwind CSS para el diseño
- Manejo de estado local con React Hooks
- **Server-Side Rendering (SSR)** para la página de detalles de película
- **Manejo de errores** para proporcionar retroalimentación adecuada al usuario

## Requisitos

- Node.js (versión 18.17.0 o superior)
- npm (versión 9 o superior)

## Instalación

1. Clonar repositorio:
   ```bash
   git clone https://github.com/matiasosorio1999/movie-app.git
   cd movie-app
   ```

2. Instalar dependencias:
    ```bash
    npm install
    ```
3. Configurar variables de entorno:
  - Crear un archivo .env.local en la raíz del proyecto
    ```bash
    cp .env.example .env.local
    ```
  - Agregar clave de API de OMDB en el archivo .env.local:
    ```bash
    NEXT_PUBLIC_OMDB_API_KEY=api_key_aqui
    ```
    Se puede obtener una API key de forma gratuita desde: https://www.omdbapi.com/apikey.aspx

4. Iniciar el servidor para desarrollo:
    ```bash
    npm run dev
    ```

5. Abrir http://localhost:3000 en el navegador para ver la aplicación.

## Scripts Disponibles
Iniciar servidor para desarrollo:
  ```bash
    npm run dev
  ```
Construir la aplicación para producción:
  ```bash
    npm run build
  ```
Iniciar el servidor de producción:
  ```bash
    npm run start
  ```
Correr ESLint para verificar el codigo:
  ```bash
    npm run lint
  ```
## Estructura del Proyecto
```
movie-app/
│
├── app/
│   ├── movie/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│
├── components/
│   ├── Icons/
│   │   ├── StarIcon.tsx
│   │   ├── TimerIcon.tsx
│   ├── MovieCard/
│   │   └── index.tsx
│   ├── PeopleList/
│   │   └── index.tsx
│   ├── SearchBar/
│   │   └── index.tsx
│
├── lib/
│   └── api.ts
│
├── styles/
│   └── globals.css
│
├── types/
│   └── movies.ts
│
├── .env.example
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```
