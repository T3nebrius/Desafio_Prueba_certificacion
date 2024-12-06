<template>
    <div class="container mt-5">
      <!-- Cargando -->
      <div v-if="loading" class="text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando información...</p>
      </div>
  
      <!-- Información de la fauna -->
      <div v-else-if="fauna" class="card shadow-lg">
        <div class="card-header bg-success text-white">
          <h5 class="card-title mb-0">{{ fauna.nombre }}</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <!-- Imagen -->
            <div class="col-md-4 text-center">
              <img
                :src="fauna.imagen || 'https://via.placeholder.com/150'"
                alt="Imagen de la fauna"
                class="img-fluid rounded"
              />
            </div>
            <!-- Información -->
            <div class="col-md-8">
              <h5 class="card-title">{{ fauna.nombre }}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <strong>Nombre:</strong> {{ fauna.nombre }}
                </li>
                <li class="list-group-item">
                  <strong>Tipo:</strong> {{ fauna.tipo || "Desconocido" }}
                </li>
                <li class="list-group-item">
                  <strong>Ubicación:</strong> {{ fauna.ubicacion || "Desconocido" }}
                </li>
                <li class="list-group-item">
                  <strong>Descripción:</strong> {{ fauna.descripcion || "Desconocido" }}
                </li>
                <li class="list-group-item">
                  <strong>Estado de Conservación:</strong>
                  {{ fauna.estadoConservacion || "Sin estado" }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Error -->
      <p v-else class="text-danger">No se encontró la información solicitada.</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    name: "DetalleComponente",
    data() {
      return {
        fauna: null,
        loading: true,
      };
    },
    methods: {
      ...mapActions(["fetchFaunaDetalle"]),
    },
    async mounted() {
      const id = this.$route.params.id;
      try {
        const data = await this.fetchFaunaDetalle(id);
        if (!data) {
          this.$router.push({ name: "not-found" });
        }
        this.fauna = data;
      } catch (error) {
        console.error("Error al obtener los datos de fauna:", error);
        this.$router.push({ name: "not-found" });
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
  }
  </style>
  