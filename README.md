# Tarea: Arquitectura y Desafíos Actuales - Comparación Docker vs Serverless

**Nombre:** Josué Andrés Mullo Vega  
**Asignatura:** Diseño y Arquitectura de Software  

---

## Parte 1: Microservicio con Docker

El microservicio ha sido contenerizado y desplegado exitosamente en Docker Hub.

- **Link a la imagen en Docker Hub:** [https://hub.docker.com/r/sekai007/api-hola](https://hub.docker.com/r/sekai007/api-hola)

- **Comando para descargar y correr:**
  ```bash
  docker run -p 3000:3000 sekai007/api-hola:

Parte 2: Función Serverless
Se implementó una función AWS Lambda simulada localmente utilizando Serverless Framework y el plugin serverless-offline.

Tecnología: Serverless Framework (v3) + Node.js 14.x

Endpoint Local: http://localhost:3001/dev/hello?name=TuNombre

Parte 3: Análisis Comparativo
1. ¿Qué fue más rápido de implementar y desplegar?
La arquitectura Serverless fue más rápida en implementación. En términos de código, Serverless requirió menos configuración inicial de infraestructura (sin Dockerfiles ni gestión de SO base). Sin embargo, configurar el entorno local con plugins (serverless-offline) presentó desafíos de compatibilidad de versiones que Docker no tuvo.

2. ¿Qué complejidad encontraste en cada tecnología?
Docker: La complejidad radica en la gestión del contenedor (Dockerfiles, puertos, imágenes base). Es más "pesado" pero más predecible localmente una vez entiendes Linux.

Serverless: La complejidad está en la configuración del entorno y versiones. Al depender de proveedores nube (AWS), simularlo localmente requiere herramientas específicas que pueden tener conflictos de versiones (como ocurrió con Node 22 vs Serverless v3). Además, existe el "Vendor Lock-in".

3. ¿Qué arquitectura recomendarías para una aplicación con picos de alto volumen de tráfico?
Recomendaría una Arquitectura Serverless. La razón principal es la elasticidad automática. Servicios como AWS Lambda escalan horizontalmente de forma instantánea basándose en la demanda, manejando picos de tráfico sin intervención manual. Con Docker, aunque Kubernetes permite auto-escalado, la configuración es mucho más compleja y el aprovisionamiento de nuevos contenedores es más lento que la invocación de una función Lambda.