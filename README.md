#  React Callback  - Optimización con useCallback 

Este es un ejercicio práctico hecho con **React por CDN**, utilizando solo **HTML**, **JavaScript**, **CSS** y sin herramientas como Vite o Webpack.  
Es ideal para comprender cómo evitar renders innecesarios en componentes hijos al pasar funciones como props.

---

## ✅ Características

- 🧠 Uso de `useCallback` para memorizar funciones
- 🧩 Evitar renderizados innecesarios con `React.memo`
- 🔃 Comparación entre un botón optimizado y uno no optimizado
- 🎯 Contadores separados y estilizados

---

## 📁 Estructura del proyecto


```
usecallback-/
│
├── index.html               # Carga React por CDN y monta la app
├── App.js                   # Contiene el componente App y la lógica principal
├── ButtonNormal.js          # Botón que NO está optimizado
├── ButtonOptimizado.js      # Botón que SÍ usa useCallback
├── style.css                # Estilos personalizados
└── README.md 
```

---

## 📦 Detalles de los archivos

### `index.html`
- Carga React, ReactDOM y Babel desde CDN
- Incluye el `<div id="root">` donde se renderiza la app
- Importa `App.js`, `ButtonNormal.js`, `ButtonOptimizado.js` y `style.css`

### `App.js`
- Define el componente `App`
- Usa `useState` para `randomNumber` y `counter`
- Define dos funciones:
  - `addCounter` → **no optimizada**
  - `createRandom` → **memorizada con `useCallback`**
- Renderiza ambos botones con sus contadores individuales

### `ButtonNormal.js`
- Componente funcional memorizado con `React.memo`
- Recibe `onClick` como prop
- Muestra su render en consola al activarse
- Se re-renderiza cuando cambia el padre (`App`)

### `ButtonOptimizado.js`
- Componente funcional memorizado con `React.memo`
- Recibe `onClick` memorizado con `useCallback`
- Solo se renderiza una vez, a menos que su prop cambie

### `style.css`
- Fondo claro y estilo suave
- Contenedor `.card` centrado y estilizado
- Cada botón tiene un color distinto

---

## 🧪 Hooks utilizados

- `useState`: manejo de estados (`counter`, `randomNumber`)
- `useCallback`: para evitar recreación innecesaria de funciones
- `React.memo`: para memorizar componentes hijos y evitar renders

---

## 💻 Cómo correrlo localmente

> 💡 Opción rápida con Python (recomendado si usas VSCode o terminal)

```bash
cd usecallback-demo
python -m http.server 8080
```
Luego en tu navegador abre: 
http://localhost:8000
---

## ✨ Vista previa

![image](https://github.com/user-attachments/assets/da1113c0-19bf-429b-9ce5-bba5df5d8d73)

![image](https://github.com/user-attachments/assets/d83c8cc8-a87d-4b6c-87c9-62b97bdc4ce1)
---

## 🧠 Resultados esperados

```txt
ButtonNormal se volvió a renderizar
Función addCounter se creó

ButtonOptimizado se renderizo
Función createRandom ejecutada
```
- El botón no optimizado se re-renderiza con cada cambio del padre (App).
- El botón optimizado no lo hace innecesariamente gracias a useCallback y React.memo.

---
## 📌 Conclusión

- useCallback evita renders
- Pero combinado con React.memo lo logra mejor

Patrón muy útil cuando pasamos funciones como props y queremos optimizar componentes hijos
---
## 💜 Autor

Vianka Castro - 23201

---

