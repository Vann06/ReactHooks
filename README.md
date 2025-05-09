# 🌗 React ThemeContext - Modo Claro / Oscuro con useContext

Este es un proyecto simple y bonito hecho con **React por CDN**, que demuestra cómo usar `useContext` para compartir información global en una app.  
En este caso: el **tema claro u oscuro** de la interfaz.

---

## ✅ Características

- 🌞 Tema claro y 🌚 tema oscuro dinámicos
- 🎯 Manejo global del estado con `useContext`
- 🔘 Botón para alternar entre modos

---

## 📁 Estructura del proyecto
```
theme-toggle/
│
├── index.html               # Carga React y Babel por CDN
├── App.js                   # Contiene App, InnerApp, ThemeDisplay y ThemeToggle
├── ThemeContext.js          # Define el contexto y el proveedor global
├── style.css                # Estilos visuales ( claro y oscuro)
└── README.md 
```

---

## 🔧 ¿Cómo funciona?

### `ThemeContext.js`
- Define `ThemeContext` usando `React.createContext()`
- Crea `ThemeProvider` que maneja:
  - Estado del tema (`light` o `dark`)
  - Función `toggleTheme()` para alternar el modo
- Expone el contexto global para el resto de componentes

### `App.js`
- Envuelve toda la app con `<ThemeProvider>`
- `InnerApp` accede al contexto y aplica clases CSS dependiendo del tema actual
- Contiene dos componentes clave:
  - `ThemeToggle`: botón que alterna el tema
  - `ThemeDisplay`: muestra el tema actual y una imagen (estática o gif)

### `style.css`
- Define estilos para `.light` y `.dark` con degradados morados
- Tamaño, color y sombra para la tarjeta principal (`.card`)
- Estilos adaptativos para el botón y la imagen

---

## 🧪 Hooks utilizados

- `useState`:  
  Se utiliza dentro de `ThemeProvider` para manejar el estado del tema (`light` o `dark`).  
  Permite actualizar dinámicamente el valor compartido en todo el contexto.

- `useContext`:  
  Se utiliza en `InnerApp`, `ThemeToggle` y `ThemeDisplay` para acceder al valor actual del tema y la función `toggleTheme` desde cualquier componente sin pasar props manualmente.

---

## 💻 Cómo correrlo localmente

> 💡 Solo necesitas abrirlo en un servidor local. Si usas Python:

```bash
cd theme-toggle
python -m http.server 8080
```
Luego abre en el navegador:
http://localhost:8080


## ✨ Vista previa

- Tema Claro
  ![image](https://github.com/user-attachments/assets/3b8ba5d0-ba75-4250-a8aa-2fa7891cea93)

- Tema Oscuro
  ![image](https://github.com/user-attachments/assets/c3eb706f-96ca-470f-8994-fb908d3c390b)



---

## 📌 Conclusión

- `useContext` permite **compartir estado global** sin necesidad de pasar props manualmente.
- Es perfecto para cosas como:
  - Tema claro/oscuro
  - Usuario actual
  - Idioma o configuración global
- Muy útil para simplificar estructuras de componentes profundas.

---

## 💜 Autor

- Vianka Castro - 23201
