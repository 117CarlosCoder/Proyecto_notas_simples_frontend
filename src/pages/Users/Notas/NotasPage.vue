<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-col cols="12" class="d-flex justify-end align-center mb-4">
          <LogoutButton />
        </v-col>
        <h1 class="text-h4 font-weight-bold mb-4">Mis Notas</h1>

        <NewNotaForm @nota-creada="fetchNotas" />

        <v-card v-if="notas.length === 0" color="yellow lighten-4" class="pa-6">
          No tienes notas todavía.
        </v-card>

        <v-row v-else>
          <v-col v-for="nota in notas" :key="nota.codigo_nota" cols="12" md="6">
            <v-card class="pa-4 mb-4" style="position: relative">
              <div class="action-buttons">
                <UpdateNotaForm
                  :nota="nota"
                  @nota-actualizada="onNotaActualizada"
                >
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon
                      class="action-btn"
                      variant="tonal"
                      color="yellow darken-2"
                      :aria-label="`Editar nota ${nota.codigo_nota}`"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                </UpdateNotaForm>
                <DeleteNotaButton
                  :notaId="nota.codigo_nota"
                  :notaTitle="nota.titulo"
                  @nota-eliminada="onNotaEliminada"
                >
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      icon
                      class="action-btn"
                      variant="tonal"
                      color="red lighten-2"
                      :aria-label="`Eliminar nota ${nota.codigo_nota}`"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                </DeleteNotaButton>
              </div>
              <h2 class="text-h6">{{ nota.titulo }}</h2>
              <br></br>
              <p style="white-space: pre-wrap;">{{ nota.descripcion }}</p>
              <br></br>
              <small>Creada: {{ formatDate(nota.fecha_creacion) }}</small>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import apiClient from "@/config/axios";

import { useRouter } from "vue-router";
import UpdateNotaForm from "../../../components/UpdateNotaForm.vue";
import NewNotaForm from "../../../components/NewNotaForm.vue";
import DeleteNotaButton from "../../../components/DeleteNoteButton.vue";
import LogoutButton from "../../../components/LogoutButton.vue";

interface Nota {
  codigo_nota: number | string;
  titulo: string;
  descripcion: string;
  fecha_creacion: string;
}

const notas = ref<Nota[]>([]);
const router = useRouter();

const fetchNotas = async () => {
  try {
    //const token = localStorage.getItem("jwt");
    const response = await  apiClient.get(`/notas/user`);
    if (Array.isArray(response.data) && response.data.length > 0) {
      notas.value = response.data;
    } else {
      notas.value = [];
    }
  } catch (err) {
    console.error("Error al cargar notas:", err);
    alert("Error al cargar notas: " + err);
    notas.value = [];
    localStorage.removeItem("jwt");
    router.push({ name: "Home" });
  }
};

const onNotaActualizada = (notaActualizada: Nota) => {
  const idx = notas.value.findIndex(
    (n) => n.codigo_nota === notaActualizada.codigo_nota
  );
  if (idx !== -1) {
    notas.value.splice(idx, 1, notaActualizada);
  } else {
    notas.value.unshift(notaActualizada);
  }
};

const onNotaEliminada = (id: number | string) => {
  const idx = notas.value.findIndex((n) => n.codigo_nota === id);
  if (idx !== -1) notas.value.splice(idx, 1);
};

const formatDate = (fecha: string) => {
  return new Date(fecha).toLocaleString();
};

onMounted(fetchNotas);
</script>

<style scoped>
.action-buttons {
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 6px;
  z-index: 10;
}
</style>
