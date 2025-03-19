# Solución al Desafío "Stats Preview Card Component"

Esta es una solución para el desafío [Stats preview card component](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)
- [¿Cómo Ejecutar Localmente?](#como-ejecutar-localmente)

---

## Descripción General

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](https://06-stats-card-challenge.netlify.app/)

---

## Tecnologías Utilizadas
- CSS con propiedades personalizadas
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- Flujo de trabajo basado en **Mobile First**

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (ImageSection, Footer, StatItem, StatsSection).
- Estructura CSS limpia y reutilizable utilizando la metodología BEM.
- Mejores prácticas en diseño web responsive.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables (por ejemplo, ImageSection, StatItem, StatsSection, Footer).
- **Convención de Nombres BEM**: Mantener una estructura de clases CSS clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx

export default function StatsSection() {
  return (
    <section className="stats-section">
      <h1 className="stats-section__title">
        Get <span className="stats-section__highlight">insights</span> that help your business grow.
      </h1>
      <p className="stats-section__description">
        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="stats">
        <StatItem amount="10k+" concept="companies" />
        <StatItem amount="314" concept="templates" />
        <StatItem amount="12M+" concept="queries" />
      </div>
    </section>
  );
}
  
  
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## Como Ejecutar Localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/06-Stats-Card-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 06-Stats-Card-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev