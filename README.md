# Link Tracker - Documentación
Link Tracker es una aplicación desarrollada con NestJS que permite enmascarar URLs y recopilar estadísticas sobre cuántas veces se ha accedido a cada enlace. Además, ofrece funcionalidades como la adición de contraseñas y fechas de vencimiento para un control más granular de los enlaces.

## Authors
- [@JonathanAGonzalez](https://github.com/JonathanAGonzalez)


## Documentation
[Docker](https://www.docker.com/) - 
[MongoDB](https://www.mongodb.com/) - 
[Nest](https://nestjs.com/) - 
[Postman Endpoints](https://documenter.getpostman.com/view/12085840/2sAXqwZzpi)

## Installation
Clonar el proyecto
```bash
  git clone https://github.com/JonathanAGonzalez/challenge-b
  cd challenge-b
  npm install / yarn install
  npm run start:dev / yarn start:dev
```

Para saber como usar la aplicación, podes acceder a la documentación de Postman en el siguiente enlace: [Postman Endpoints](https://documenter.getpostman.com/view/12085840/2sAXqwZzpi)

## Requisitos para ejecutar la aplicación con Docker
- Docker
- Docker Compose
- Tener los puertos 8080 y 27017 disponibles
- Docker Desktop (Windows/Mac/linux)

```bash
    docker compose up --build
```
Para saber como usar la aplicación, podes acceder a la documentación de Postman en el siguiente enlace: [Postman Endpoints](https://documenter.getpostman.com/view/12085840/2sAXqwZzpi)


## Características probadas y resultados esperados 

1. **Crear link**
    - Verificar que se puede crear un link válido con una URL válida. ✅
    - Verificar que se devuelve un JSON que contiene la URL enmascarada.✅
    - Asegurarse de que al crear el link, se pueda agregar un parámetro de contraseña.✅
    - Confirmar que se puede agregar una fecha de expiración al crear el link.✅
2. **Redirección**
    - Probar redireccionar a una URL enmascarada válida y verificar que se realiza el redirect correctamente.✅
    - Verificar que se devuelva un código de estado 404 al intentar redirigir a una URL enmascarada inválida.✅
    - Confirmar que la redirección funciona correctamente con el parámetro de contraseña.✅
    - Verificar que se devuelva un código de estado 404 si la contraseña no es correcta.✅
3. **Estadísticas por link**
    - Probar que se puede obtener estadísticas de redirección para un link válido.✅
    - Verificar que se devuelve la cantidad correcta de veces que se redireccionó el link.✅
    - Confirmar que no se devuelvan estadísticas para un link inválido (404).✅
4. **Invalidar link**
    - Probar la invalidación de un link existente y verificar que no se pueda redireccionar a él después de ser invalidado.✅
    - Verificar que se devuelva un código de estado 404 al intentar acceder a un link que ha sido invalidado.✅
5. **Comprobaciones adicionales**
    - Probar la expiración de un link y asegurarse de que devuelva 404 después de la fecha especificada..✅
    - Comprobar que los mensajes de error sean claros y útiles para el usuario.✅



## Agracedimientos
Gracias a [Bidcom](https://www.bidcom.com.ar/) por la oportunidad de participar en este desafío.✨



    