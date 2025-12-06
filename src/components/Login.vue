<template>
  <div>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 150px"
    >
      <v-icon size="96" color="yellow darken-2"> mdi-note-text </v-icon>
    </v-container>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
      color="gray darken-100"
    >
      <div class="text-subtitle-1 text-medium-emphasis mb-2">
        Nombre de Usuario
      </div>
      <v-text-field
        v-model="username"
        density="compact"
        placeholder="Nombre de Usuario"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        color="yellow darken-2"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis mt-4 mb-2">Password</div>
      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingrese su contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        color="yellow darken-2"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mt-6 mb-4"
        color="yellow darken-2"
        size="large"
        variant="tonal"
        block
        @click="handleLogin"
      >
        Iniciar Sesión
      </v-btn>

      <v-card-text class="text-center mt-2">
        <a
          class="text-yellow-darken-2 text-decoration-none"
          href="#"
          @click.prevent="$emit('go-register')"
        >
          Registrarse <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import apiClient from "@/config/axios";

const visible = ref(false);
const username = ref("");
const password = ref("");

const emit = defineEmits(["login-success", "go-register"]);

const handleLogin = async () => {
  try {
    const { data } = await apiClient.post('/auth/login', {
      nombre_usuario: username.value,
      contrasenia: password.value,
    });

    localStorage.setItem("jwt", data.token);
    emit("login-success");
  } catch (err) {
    console.error("Error de login:", err);
    alert("Error de login: " + err);
    alert("Usuario o contraseña incorrectos");
  }
};
</script>

<style scoped>
.text-yellow-darken-2 {
  color: #fbc02d !important;
}

.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6);
}
</style>
