<template>
  <app-layout
    :tasks="tasks"
    :filters="state.filters"
    @update-tasks="updateTasks"
  >
    <home-view
      :tasks="filteredTasks"
      :filters="state.filters"
      @update-tasks="updateTasks"
      @apply-filters="applyFilters"
    />
  </app-layout>
</template>

<script setup>
import { reactive, computed } from 'vue';

import { AppLayout } from '@/layouts';
import { HomeView } from '@/views';

import { normalizeTask } from '@/common/helpers';

import tasks from '@/mocks/tasks.json';

const state = reactive({
  tasks: tasks.map((task) => normalizeTask(task)),
  filters: {
    search: '',
    users: [],
    statuses: [],
  },
});

const filteredTasks = computed(() => {
  const filtersAreEmpty = Object.values(state.filters).every((value) => !value.length);

  if (filtersAreEmpty) {
    // вернуть все задачи, если фильтры не применены
    return state.tasks;
  }

  // Фильтр по поиску
  const searchFilter = (task) => task.title
      .toLowerCase()
      .includes(state.filters.search.toLowerCase().trim());

  // Фильтр по пользователям
  const usersFilter = (task) => state.filters.users
      .some((userId) => userId === task.userId);

  const statusesFilter = (task) => state.filters.statuses
      .some((el) => el === task.status || el === task.timeStatus);
  
  return state.tasks.filter((task) => {
    let result = {
      search: searchFilter,
      users: usersFilter,
      statuses: statusesFilter,
    };

    return Object.entries(result)
        .every(([key, callback]) =>
          !state.filters[key].length || callback(task));
  });
});

function updateTasks(tasksToUpdate) {
  tasksToUpdate.forEach((task) => {
    const index = state.tasks.findIndex(({ id }) => id === task.id);

    // findIndex вернет элемент массива или -1
    // Используем bitwise not для определения, если index === -1
    // ~-1 вернут 0, а значит false

    ~index && state.tasks.splice(index, 1, task);
  });
}

function applyFilters() {
  if (!Array.isArray(state.filters[entity])) {
    state.filters[entity] = item;
  } else {
    const resultValues = [...state.filters[entity]];
    const itemIndex = resultValues.findIndex((el) => el === item);

    ~itemIndex
      ? resultValues.splice(itemIndex, 1)
      : resultValues.push(item);

    state.filters[entity] = resultValues;
  }
}

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
