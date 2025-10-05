<template>
  <v-container
    class="fill-height d-flex flex-column align-center justify-center"
  >
    <v-card
      class="pa-8 text-center"
      color="amber lighten-4"
      elevation="10"
      rounded="xl"
      max-width="500"
    >
      <v-container
        class="d-flex justify-center align-center"
        style="height: 150px"
      >
        <v-icon size="96" color="black darken-2"> mdi-note-text </v-icon>
      </v-container>

      <h1 class="text-h4 font-weight-bold mb-2">Notas App</h1>
      <p class="text-subtitle-1 mb-6">
        Tu espacio personal para organizar tus ideas
      </p>

      <v-btn
        color="black darken-3"
        size="large"
        class="text-yellow font-weight-bold"
        @click="dialog = true"
      >
        Iniciar Sesión
      </v-btn>
    </v-card>

    <v-dialog v-model="dialog" max-width="400" persistent>
      <v-card>
        <v-btn
          icon
          class="dialog-close-btn"
          @click="dialog = false"
          aria-label="Cerrar"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-card-text>
          <LoginForm
            v-if="!showRegister"
            @login-success="onLoginSuccess"
            @go-register="showRegister = true"
          />
          <RegisterForm
            v-else
            @register-success="showRegister = false"
            @go-login="showRegister = false"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "@/components/Login.vue";

const dialog = ref(false);
const showRegister = ref(false);
const router = useRouter();

function onLoginSuccess() {
  dialog.value = false;
  router.push({ name: "NotasPage" });
}
</script>

<style scoped>
.dialog-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
}
</style>
