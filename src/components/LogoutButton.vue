<template>
  <v-btn
    color="yellow lighten-2"
    variant="tonal"
    @click="logout"
    :loading="loading"
  >
    <v-icon left>mdi-logout</v-icon>
    Cerrar sesión
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(false);

const logout = () => {
  loading.value = true;
  localStorage.removeItem("jwt");

  setTimeout(() => {
    loading.value = false;
    router.push("/home");
  }, 200);
};
</script>
