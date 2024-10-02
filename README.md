# Calculadora de Propinas y Consumo 🧮💰

Este proyecto es una aplicación de calculadora de propinas desarrollada con **React** y **TypeScript**. Además, el proyecto utiliza **Tailwind CSS** para el estilizado y **pnpm** como gestor de paquetes. La calculadora permite agregar items del menú, calcular el total de la cuenta y elegir un porcentaje de propina.

## Live Preview

Puedes visualizar una versión en vivo del proyecto en el siguiente enlace:

[Calculadora de Propinas](#)

## Características

- Selecciona productos del menú.
- Ve los productos seleccionados en la sección "Consumo".
- Selecciona el porcentaje de propina.
- Calcula automáticamente la propina y el total a pagar.
- Botón para guardar la orden.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)

## Instalación y ejecución

Sigue estos pasos para ejecutar la aplicación localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/calculadora-propinas-react.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd calculadora-propinas-react
   ```

3. Instala las dependencias utilizando **pnpm**:

   ```bash
   pnpm install
   ```

4. Ejecuta la aplicación en modo desarrollo:

   ```bash
   pnpm run dev
   ```

5. Abre tu navegador y accede a:
   ```
   http://localhost:5173
   ```

## Estructura del proyecto

- `src/`: Contiene los componentes de React y la lógica principal de la aplicación.
  - `components/`: Componentes individuales como `Menu`, `Consumption`, `TipCalculator`, `TotalSummary`, etc.
  - `App.tsx`: Componente principal que renderiza la calculadora y los componentes principales.
  - `index.tsx`: Punto de entrada de la aplicación.

## Estilos con Tailwind CSS

Este proyecto usa **Tailwind CSS** para el diseño. Si no estás familiarizado con Tailwind, puedes consultar la [documentación oficial](https://tailwindcss.com/docs/installation) para ver cómo se configura y utiliza.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Empuja los cambios a la rama (`git push origin feature-nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
