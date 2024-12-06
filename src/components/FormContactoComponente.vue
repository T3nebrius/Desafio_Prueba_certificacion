<template>
    <div class="contact-form">
      <h2>Formulario de Contacto</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            placeholder="Ingresa tu correo"
            required
          />
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">Mensaje</label>
          <textarea
            id="message"
            v-model="message"
            class="form-control"
            placeholder="Escribe tu mensaje"
            rows="4"
            required
          ></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <div v-if="formSubmitted" class="alert alert-success mt-3">
        ¡Gracias por contactarnos! Recibimos tu mensaje.
      </div>
  
      <div v-if="formError" class="alert alert-danger mt-3">
        Hubo un error al enviar el formulario. Intenta nuevamente.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
        formSubmitted: false,
        formError: false,
      };
    },
    methods: {
      handleSubmit() {
        if (this.email && this.message) {
          setTimeout(() => {
            this.formSubmitted = true;
            this.formError = false;
          }, 1000);
        } else {
          this.formError = true;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .contact-form .form-label {
    font-weight: bold;
  }
  
  .contact-form button {
    width: 100%;
  }
  
  .contact-form .alert {
    text-align: center;
  }
  </style>
  