![](/home/lap-bcn-031/IdeaProjects/bftp2-fqt-grupo1/frontend/src/assets/logo/readme-img.png)
# Fundación Quiero Trabajo
# FullStack API (SpringBoot + React)

## Repositorio del proyecto
https://github.com/desimorenoh/bftp2-fqt-grupo1

## Ver Demo en:
[www.fquierotrabajo.com ](https://bftp2-fqt-grupo1.herokuapp.com/)

## Stack 🛠️
Java
Spring Boot
Spring JWT Security
H2
Postgres
Gradle
React
HTML5
CSS3
Javascript
Heroku

### Estructura 

- La carpeta `banckend` contiene el backend (Java, Spring Boot, Spring JWT Security)
- La carpeta `frontend` contiene el frontend, que se compila usando `npm` y `webpack`

## Desarrollo

### Compilación y puesta en marcha 🚀

Para compilar todo el código (frontend y backend), podemos usar las tareas `buildFrontend`, `build` y `bootRun` de Gradle.

- Desde línea de comandos:

```bash
# Usamos "gradlew.bat" en lugar de ./gradlew en Windows
./gradlew buildFrontend build bootRun
```

- Desde IntelliJ usando el menú de Gradle


### Trabajando con el frontend

Para trabajar con el frontend usar comandos `npm`  desde la carpeta frontend (`cd frontend`).

Para no lanzar el servidor para visualizar un cambio en
el frontend, es posible usar **webpack dev server**.

Desde la carpeta `frontend`, hacemos:

```
npm run develop
```

De este modo se pueden hacer pruebas en `localhost:3000` (o configurar el puerto en el archivo `webpack.config.js`).

## Base de datos

Este proyecto incluye una base de datos en memoria H2. Puede modificarse la configuración para sustituir esta base de datos
por una base de datos diferente.

- Panel de H2: Una vez arrancada la aplicación (`bootRun`), puede accederse al panel de configuración
  de H2 disponible en `/h2-ui`. Para hacer login se debe usar la misma configuración de `application.properties`.

  
## Deploy a Heroku con Postgres

Se realizó deploy a heroku, para hacer push hay que hacer el commit y luego desde el terminal 

```bash
git push heroku main
```

Para abrir la aplicación en Heroku ejecutar desde el terminal:

```bash
heroku open
```

### Equipo de desarrollo ✒️

- [Alexia Cabre ](https://github.com/ALEXIABCN)
- [Carmen Gamarra](https://github.com/Cgammarr)
- [Desirée Moreno Hernández](https://github.com/desimorenoh)
- [Judith Quiñe](https://github.com/judithquine)
- [Laura Contreras](https://github.com/Lalu163)


### Expresiones de Gratitud 🎁
- [Fundación Quiero Trabajo](https://www.quierotrabajo.org/)
- [FactoríaF5](https://github.com/FactoriaF5Code)
- [Marta Sastre](https://github.com/msastreharo)
- [Javi Sánchez](https://github.com/jsrois)