<template>
  <div>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 150px"
    >
      <v-icon size="96" color="yellow darken-2"> mdi-account-plus </v-icon>
    </v-container>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
      color="gray darken-3"
    >
      <h2
        class="text-h5 text-center mb-6 text-yellow-darken-2 font-weight-bold"
      >
        Crear Cuenta
      </h2>

      <v-text-field
        v-model="name"
        density="compact"
        label="Nombre Completo"
        prepend-inner-icon="mdi-account-circle-outline"
        variant="outlined"
        color="yellow darken-2"
      />

      <v-text-field
        v-model="username"
        density="compact"
        label="Nombre de Usuario"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        color="yellow darken-2"
      />

      <v-text-field
        v-model="email"
        density="compact"
        label="Correo Electrónico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        color="yellow darken-2"
        type="email"
      />

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        label="Contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        color="yellow darken-2"
        @click:append-inner="visible = !visible"
      />

      <v-text-field
        v-model="confirmPassword"
        :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visibleConfirm ? 'text' : 'password'"
        density="compact"
        label="Confirmar Contraseña"
        prepend-inner-icon="mdi-lock-check-outline"
        variant="outlined"
        color="yellow darken-2"
        @click:append-inner="visibleConfirm = !visibleConfirm"
      />

      <v-btn
        class="mt-6 mb-4"
        color="yellow darken-2"
        size="large"
        variant="tonal"
        block
        @click="handleRegister"
      >
        Registrarse
      </v-btn>

      <v-card-text class="text-center mt-2">
        <a
          class="text-yellow-darken-2 text-decoration-none"
          href="#"
          @click.prevent="$emit('go-login')"
        >
          ¿Ya tienes cuenta? Inicia sesión
          <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6 font-weight-bold"
          >Registro exitoso 🎉</v-card-title
        >
        <v-card-text>Tu cuenta ha sido creada correctamente.</v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="yellow darken-2" text @click="closeDialog"
            >Aceptar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const dialog = ref(false);

const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const visible = ref(false);
const visibleConfirm = ref(false);

const emit = defineEmits(["register-success", "go-login"]);

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/auth/register",
      {
        nombre: name.value,
        nombre_usuario: username.value,
        correo: email.value,
        contrasenia: password.value,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dialog.value = true;
    emit("register-success");
  } catch (err) {
    console.error("Error en el registro:", err);
    alert("Error al registrar usuario :" + err);
  }
};

const closeDialog = () => {
  dialog.value = false;
  emit("register-success");
};
</script>

<style scoped>
.text-yellow-darken-2 {
  color: #fbc02d !important;
}
.text-medium-emphasis {
  color: rgba(255, 255, 255, 0.7);
}
</style>
