<template>
  <div>
    <v-dialog v-model="open" max-width="600px">
      <template #activator="{ props }">
        <slot name="activator" :props="props">
          <v-btn v-bind="props" color="secondary" small> Editar </v-btn>
        </slot>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h6">Editar Nota</span>
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
          <v-btn text @click="onCancel">Cancelar</v-btn>
          <v-btn color="yellow darken-2" :disabled="!valid" @click="onSubmit">
            Guardar cambios
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import axios from "axios";

interface Nota {
  codigo_nota: number | string;
  titulo: string;
  descripcion: string;
  fecha_creacion?: string;
}

const props = defineProps<{ nota: Nota }>();

const emit = defineEmits(["nota-actualizada"]);

const open = ref(false);
const titulo = ref(props.nota?.titulo ?? "");
const descripcion = ref(props.nota?.descripcion ?? "");
const valid = ref(false);
const form = ref<any | null>(null);

watch(
  () => props.nota,
  (newVal) => {
    if (newVal) {
      titulo.value = newVal.titulo ?? "";
      descripcion.value = newVal.descripcion ?? "";
    }
  },
  { immediate: true }
);

watch(open, (val) => {
  if (val === true) {
    titulo.value = props.nota?.titulo ?? "";
    descripcion.value = props.nota?.descripcion ?? "";
    valid.value = false;
  }
});

const onCancel = () => {
  open.value = false;
  titulo.value = props.nota?.titulo ?? "";
  descripcion.value = props.nota?.descripcion ?? "";
  valid.value = false;
};

const onSubmit = async () => {
  if (!(form.value as any)?.validate?.()) return;

  try {
    const token = localStorage.getItem("jwt");
    const id = props.nota.codigo_nota;
    const payload = { titulo: titulo.value, descripcion: descripcion.value };

    const response = await axios.patch(
      `http://localhost:3000/notas/${id}`,
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const notaActualizada = response?.data ?? { ...props.nota, ...payload };
    emit("nota-actualizada", notaActualizada);

    open.value = false;
  } catch (err) {
    console.error("Error al actualizar nota:", err);
    alert("Error al actualizar nota: " + err);
  }
};
</script>
