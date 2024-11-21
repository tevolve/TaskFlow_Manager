<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-5">TaskFlow Manager</h1>
    
    <div>
      <input v-model="taskTitle" type="text" placeholder="Nova Tarefa" class="border p-2 w-full mb-3" />
      <button @click="addTask" class="bg-blue-500 text-white p-2 w-full">Adicionar Tarefa</button>
    </div>

    <div v-if="tasks.length">
      <h2 class="mt-5 text-xl">Tarefas</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id" class="flex justify-between items-center">
          <span :class="{'line-through': task.completed}" class="text-lg">{{ task.title }}</span>
          <button @click="removeTask(task.id)" class="text-red-500">Excluir</button>
        </li>
      </ul>
    </div>

    <div v-if="completedCount > 0" class="mt-5">
      <h3 class="text-lg">Tarefas Concluídas Hoje: {{ completedCount }}</h3>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'TaskFlowManager',
  setup() {
    const taskTitle = ref('');
    const tasks = ref([]);
    const completedCount = ref(0);

    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks');
      tasks.value = await response.json();
      completedCount.value = tasks.value.filter(task => task.completed).length;
    };

    const addTask = async () => {
      if (taskTitle.value.trim()) {
        const newTask = { title: taskTitle.value, completed: false };
        await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          body: JSON.stringify(newTask),
          headers: { 'Content-Type': 'application/json' }
        });
        taskTitle.value = '';
        fetchTasks();
      }
    };

    const removeTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
      fetchTasks();
    };

    onMounted(() => fetchTasks());

    return {
      taskTitle,
      tasks,
      addTask,
      removeTask,
      completedCount
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
