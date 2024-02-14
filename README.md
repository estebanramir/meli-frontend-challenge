# Meli-frontend-challenge

## Quick start

1.  Asegurarse de tener instalada una versión de Node.js igual o superior a 10.13
2.  Clonar el repositorio `https://github.com/estebanramir/meli-frontend-challenge`
3.  En la carpeta raiz corre el comanod `npm run install:all` y espera a que se instalen todos los modulos de Node
4.  En la carpeta raiz corre el comando `npm run dev`
5.  La aplicacion queda expuesta en http://localhost:3000/
6.  Happy Code

## Decisiones tecnológicas

### Front End

Para el desarrollo de Front End se decidió utilizar el framework Next JS debido a que facilita la creación de aplicaciones server-side-render utilizando como base React JS. Se escogió esta tecnología principalmente porque ofrece una mejor performance y SEO al estar renderizando el HTML de la aplicación desde el servidor. Adicionalmente, se utilizó SASS como preprocesador de CSS para separar la declaración de estilos en archivos independientes por cada componente. También aprovechando las ventajas que ofrece como el uso de variables, mixins y composición de estilos orientando la definición de clases a la metodología BEM.
La velocidad de renderizado en este caso depende de la capacidad de procesamiento del servidor lo que mejora los tiempos de carga en algunos casos. De este modo, también se podrían crear varias instancias de la aplicación según el crecimiento de las peticiones.

### Back End

Para el Back End se utilizó Node JS junto Express lo que facilitó la creación del api y las rutas de los diferentes endpoints.

### SEO

Al renderizar la aplicación desde el servidor, se obtiene como ventaja que los motores de búsqueda encontrarán un HTML semánticamente estructurado con contenido, en este caso con los productos buscados. Adicionalmente, la URL del detalle de un producto puede incluir el título de este mismo. Todas las páginas tienen un título descriptivo y se puede acceder directamente por su URL.
