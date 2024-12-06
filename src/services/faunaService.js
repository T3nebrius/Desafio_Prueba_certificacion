/**
 * Simulacion de API con archivo local .json
 */

import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8081/localData.json",
});

export const obtenerTodo = async () => {
    try {
      const response = await api.get("/");
      return response.data; 
    } catch (error) {
      console.error("Error al obtener todos los registros:", error);
    }
};


export const obtenerFaunaPorId = async (id) => {
  try {
    const response = await api.get("/");
    const especie = response.data.especies.find(item => item.id === Number(id)); //se tuvo que castear, sino no comparaba correctamente
    
    if (especie) {
      const { id: especieId, nombre, tipo, ubicacion, descripcion, imagen, estadoConservacion } = especie;
      return {
        especieId,
        nombre,
        tipo,
        ubicacion,
        descripcion,
        imagen,
        estadoConservacion
      };
    } else {
      console.log('No se encontró la especie con ese id');
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el registro en particular:", error);
  }
};

