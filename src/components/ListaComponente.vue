<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Especies</h1>
  
      <!-- Filtros -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <select v-model="filtroTipo" @change="filtrarEspecies" class="form-select">
            <option value="">Todos los tipos</option>
            <option value="Flora">Flora</option>
            <option value="Fauna">Fauna</option>
          </select>
        </div>
  
        <div class="col-md-3">
          <select v-model="filtroRegion" @change="filtrarEspecies" class="form-select">
            <option value="">Todas las regiones</option>
            <option v-for="region in regiones" :key="region" :value="region">
              {{ region }}
            </option>
          </select>
        </div>
  
        <div class="col-md-3">
          <select v-model="filtroEstado" @change="filtrarEspecies" class="form-select">
            <option value="">Todos los estados</option>
            <option v-for="estado in estadosConservacion" :key="estado" :value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
  
        <div class="col-md-3">
          <select v-model="criterioOrden" @change="ordenarEspecies" class="form-select">
            <option value="">Sin orden</option>
            <option value="tipo">Tipo</option>
            <option value="estadoConservacion">Estado de Conservación</option>
          </select>
        </div>
      </div>
  
      <!-- Lista de especies -->
      <div class="row">
        <div
          v-for="especie in especiesFiltradas"
          :key="especie.id"
          class="col-md-4 col-lg-3 mb-4"
        >
          <div class="card h-100">
            <img
              :src="especie.imagen"
              class="card-img-top"
              :alt="`Imagen de ${especie.nombre}`"
            />
            <div class="card-body">
              <h5 class="card-title">{{ especie.nombre }}</h5>
              <p class="card-text">
                <strong>Nombre:</strong> {{ especie.nombre }} <br />
                <strong>Estado Conservación:</strong> {{ especie.estadoConservacion }} <br />
                <strong>Tipo:</strong> {{ especie.tipo }}
              </p>
              <p class="card-text">
                <router-link :to="`/detalle/${especie.id}`">
                  <button class="btn btn-primary">MAS DATOS</button>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import { obtenerTodo } from "@/services/faunaService";
  
  export default {
    name: "ListaComponente",
    setup() {
      const especies = ref([]);
      const filtroTipo = ref("");
      const filtroRegion = ref("");
      const filtroEstado = ref("");
      const criterioOrden = ref("");
  
      const regiones = ref([]);
      const estadosConservacion = ref([]);
  
      const especiesFiltradas = computed(() => {
        let resultado = especies.value;
  
        // Filtro por tipo
        if (filtroTipo.value) {
          resultado = resultado.filter((especie) => especie.tipo === filtroTipo.value);
        }
  
        // Filtro por regi�n
        if (filtroRegion.value) {
          resultado = resultado.filter((especie) =>
            especie.ubicacion.includes(filtroRegion.value)
          );
        }
  
        // Filtro por estado de conservaci�n
        if (filtroEstado.value) {
          resultado = resultado.filter(
            (especie) => especie.estadoConservacion === filtroEstado.value
          );
        }
  
        // Ordenar por criterio
        if (criterioOrden.value === "tipo") {
          resultado = resultado.sort((a, b) => a.tipo.localeCompare(b.tipo));
        } else if (criterioOrden.value === "estadoConservacion") {
          resultado = resultado.sort((a, b) =>
            a.estadoConservacion.localeCompare(b.estadoConservacion)
          );
        }
  
        return resultado;
      });
  
      const filtrarEspecies = () => {
        // Computed ya filtra autom�ticamente.
      };
  
      const ordenarEspecies = () => {
        // Computed ya ordena autom�ticamente.
      };
  
      onMounted(async () => {
        const data = await obtenerTodo();
        especies.value = data.especies;
  
        // Obtener valores �nicos para filtros
        regiones.value = [...new Set(data.especies.map((e) => e.ubicacion))];
        estadosConservacion.value = [
          ...new Set(data.especies.map((e) => e.estadoConservacion)),
        ];
      });
  
      return {
        especies,
        filtroTipo,
        filtroRegion,
        filtroEstado,
        criterioOrden,
        regiones,
        estadosConservacion,
        especiesFiltradas,
        filtrarEspecies,
        ordenarEspecies,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  