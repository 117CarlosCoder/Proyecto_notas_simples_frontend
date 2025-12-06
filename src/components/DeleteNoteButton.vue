<template>
  <div>
    <v-dialog v-model="open" max-width="420px">
      <template #activator="{ props }">
        <slot name="activator" :props="props">
          <v-btn
            v-bind="props"
            icon
            class="ma-0 pa-0"
            :aria-label="`Eliminar nota ${notaId}`"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </slot>
      </template>

      <v-card>
        <v-card-title class="text-h6">Confirmar eliminación</v-card-title>

        <v-card-text>
          ¿Deseas eliminar la nota
          <strong v-if="notaTitle">"{{ notaTitle }}"</strong>
          <span v-else>con id {{ notaId }}</span
          >? Esta acción no se puede deshacer.
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text @click="cancel" :disabled="loading">Cancelar</v-btn>
          <v-btn
            color="red darken-1"
            @click="confirm"
            :loading="loading"
            :disabled="loading"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import apiClient from "@/config/axios";

const props = defineProps<{
  notaId: number | string;
  notaTitle?: string;
  apiBase?: string;
}>();

const emit = defineEmits(["nota-eliminada", "error"]);

const open = ref(false);
const loading = ref(false);

const cancel = () => {
  open.value = false;
};

const confirm = async () => {
  if (loading.value) return;
  loading.value = true;
  try {
    await apiClient.delete(`/notas/${props.notaId}`);
    emit("nota-eliminada", props.notaId);
    open.value = false;
  } catch (err) {
    alert("Error al eliminar nota " + err);
    console.error("Error al eliminar nota:", err);
    emit("error", err);
  } finally {
    loading.value = false;
  }
};
</script>
