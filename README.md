# Demo KOOB Web

Sitio web hecho con React + TypeScript + Vite.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Despliegue en GitHub Pages

Este repositorio incluye el workflow `/.github/workflows/deploy-pages.yml` para compilar y publicar automáticamente en GitHub Pages cuando haces push a `main`.

Configura esto una sola vez en GitHub:

1. Ve a `Settings` -> `Pages`.
2. En `Source`, selecciona `GitHub Actions`.
3. Haz push a `main` y espera a que termine el workflow.

Tu web quedará publicada en:

- `https://dsellees.github.io/demo-koob-web-v0/`
