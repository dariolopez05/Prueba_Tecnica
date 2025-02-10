# Formulario de Contacto

Este proyecto es un formulario de contacto completamente funcional desarrollado con **HTML5**, **SASS** y **JavaScript**. El formulario incluye validación de campos y simula el envío de datos usando **AJAX**.

---

## Características

- **Campos del formulario**:
  - Nombre
  - Correo electrónico
  - Número de teléfono
  - Mensaje

- **Validación**:
  - Todos los campos son obligatorios, excepto el número de teléfono.
  - Validación de formato para el correo electrónico y el número de teléfono.

- **Simulación de envío**:
  - Usa `fetch` para simular el envío de datos a una API de prueba ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)).

- **Interfaz**:
  - Muestra una tarjeta con los datos ingresados después de enviar el formulario.

---

## Requisitos

- **Node.js**: Para compilar SASS y ejecutar scripts.
- **Navegador web**: Para visualizar el proyecto.

---

## Instrucciones para Ejecutar el Proyecto

### 1. Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/proyecto-formulario.git
cd proyecto-formulario