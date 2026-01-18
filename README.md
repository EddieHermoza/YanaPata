# YanaPata - Sistema Veterinario

Bienvenido al repositorio de **YanaPata**, una aplicación web para la gestión de servicios veterinarios, citas, y administración de clientes y mascotas.

Este proyecto ha sido refactorizado para utilizar las tecnologías más recientes del ecosistema Next.js.

## Tecnologías

El proyecto está construido sobre el siguiente stack tecnológico:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: JavaScript / React
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Base de Datos**: [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) (PostgreSQL)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Autenticación**: [Auth.js v5](https://authjs.dev/) (NextAuth) con Credenciales
- **Emails**: [Resend](https://resend.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) (Reemplazando AOS)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)

## Configuración e Instalación

### 1. Clona el repositorio
```bash
git clone <url-del-repositorio>
cd YanaPata
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Configura las variables de entorno
Crea un archivo `.env` en la raíz basado en `.env.example`. Necesitarás configurar lo siguiente:

```env
# Base de Datos (Vercel Postgres / Neon)
DATABASE_URL="postgresql://..."

# Auth.js
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="tu-secreto-generado-aleatoriamente"

# Resend (Emails)
RESEND_TOKEN="re_..."
```

> **Nota**: Para generar un `AUTH_SECRET`, puedes ejecutar `openssl rand -base64 32` en tu terminal o usar un generador online.

### 4. Configura la Base de Datos
Sincroniza el esquema de Prisma con tu base de datos:

```bash
npx prisma generate
npx prisma db push
```

### 5. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción (incluye generación de Prisma).
- `npm start`: Inicia el servidor de producción.
- `npm run lint`: Ejecuta ESLint para verificar el código.
- `npx prisma studio`: Abre una interfaz web para gestionar la base de datos localmente.

## Estructura del Proyecto

- `/src/app`: Rutas y páginas de la aplicación (App Router).
- `/src/Components`: Componentes reutilizables.
- `/src/lib`: Utilidades, configuración de DB (`db.js`), acciones de servidor (`actions.js`, `auth_actions.js`).
- `/src/auth.js`: Configuración central de Auth.js.
- `/src/middleware.js`: Middleware para protección de rutas.
- `/prisma`: Esquema de la base de datos.
- `/public`: Archivos estáticos e imágenes.

## Funcionalidades Clave

- **Autenticación Segura**: Login y Registro de clientes y administradores.
- **Gestión de Citas**: Solicitud de citas con notificaciones por correo.
- **Panel de Administración**: Dashboard para gestionar usuarios, mascotas, servicios y solicitudes.
- **Animaciones Suaves**: Experiencia de usuario mejorada con Framer Motion.
- **Diseño Responsivo**: Adaptado a móviles y escritorio.
