<template>
  <div>
    <v-dialog v-model="open" max-width="500px">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          color="yellow darken-2"
          variant="tonal"
          class="mb-4"
        >
          Nueva Nota
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h6">Crear Nota</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="titulo"
              label="Título"
              :rules="[(v: any) => !!v || 'El título es obligatorio']"
              required
            />
            <v-textarea
              v-model="descripcion"
              label="Descripción"
              :rules="[(v: any) => !!v || 'La descripción es obligatoria']"
              required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text @click="close">Cancelar</v-btn>
          <v-btn color="yellow darken-2" :disabled="!valid" @click="submit">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const emit = defineEmits(["nota-creada"]);

const open = ref(false);
const titulo = ref("");
const descripcion = ref("");
const valid = ref(false);
const form = ref<any | null>(null);

const close = () => {
  open.value = false;
  titulo.value = "";
  descripcion.value = "";
  valid.value = false;
};

const submit = async () => {
  if (!(form.value as any)?.validate?.()) return;

  try {
    const token = localStorage.getItem("jwt");
    await axios.post(
      "http://localhost:3000/notas",
      { titulo: titulo.value, descripcion: descripcion.value },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    close();
    emit("nota-creada");
  } catch (err) {
    console.error("Error al crear nota:", err);
    alert("Error al crear nota: " + err);
  }
};
</script>
