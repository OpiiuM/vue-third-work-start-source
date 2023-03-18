<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import { useTasksStore, useColumnsStore, useUsersStore } from '@/stores';

import { AppLayout } from '@/layouts';

const tasksStore = useTasksStore();
const usersStore = useUsersStore();
const columnsStore = useColumnsStore();

// Загрузка первоначальных данных
void tasksStore.fetchTasks();
void usersStore.fetchUsers();
void columnsStore.fetchColumns();
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $blue-600;
  top: 0;
  left: 0;
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $white-900;

  img {
    display: block;
    margin: 0 auto;
  }

  h1 {
    @include m-s36-h21;
    text-align: center;
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  b {
    font-size: 1.2em;
  }
}
</style>
