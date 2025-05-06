# 🔎 React UserSearch - Filtro de Usuarios con useMemo

Este es un ejercicio básico de **búsqueda de usuarios** hecho con **React**, utilizando solo **HTML**, **JavaScript**, **CSS** y **React por CDN**.  
No requiere herramientas como Vite o Webpack.  
Es ideal para practicar los hooks `useState` y `useMemo`, junto con buenas prácticas en diseño visual y manejo de formularios modales.

---

## ✅ Características

- 🔍 Búsqueda de usuarios en tiempo real
- ⚡ Filtrado optimizado con `useMemo`
- 🧾 Lista  de usuarios disponibles
- ➕ Agregar nuevos usuarios
---

## 📁 Estructura del proyecto

```
react-usersearch/
│
├── index.html               # Archivo principal, carga React por CDN y monta el componente
├── userSearch.js            # Componente React con lógica de estado, filtros, modal y renderizado
└── style.css                # Estilos
```

### `index.html`
- Carga React, ReactDOM y Babel por CDN
- Apunta al script `userSearch.js`
- Incluye el contenedor `<div id="root">` donde se renderiza la app
- Importa los estilos desde `style.css`

### `userSearch.js`
- Define el componente `UserSearch`
- Maneja:
  - Lista de usuarios
  - Texto de búsqueda
  - Mostrar/ocultar formulario modal
  - Inputs controlados para nombre y descripción
  - Agregado de nuevos usuarios
- Utiliza `useState` y `useMemo`

### `style.css`
- Estilos para:
  - Layout centrado
  - Inputs modernos
  - Lista alineada a la izquierda con nombre arriba y descripción abajo
  - Modal emergente para agregar usuarios
  - Scroll interno en la lista

---

## 🧪 Hooks utilizados

- `useState`: para manejar estado de búsqueda, usuarios, inputs y formulario
- `useMemo`: para memorizar el resultado del filtro y no recalcular innecesariamente
---

## 🧾 Cómo correrlo localmente

> 💡 Opción rápida con Python (recomendado si usas VSCode)

```bash
cd react-usersearch
python -m http.server
```
Luego en tu navegador abre: 
http://localhost:8000
---

## ✨ Vista previa

![image](https://github.com/user-attachments/assets/c7ce1e4f-286f-49c9-8622-485fe3473a4a)

![image](https://github.com/user-attachments/assets/c7ce1e4f-286f-49c9-8622-485fe3473a4a)

---

## Autor

Vianka Castro - 23201

---



