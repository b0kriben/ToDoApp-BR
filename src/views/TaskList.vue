<template>
  <div class="container col-sm-12 col-md-6">
    <h1 class="text-center">Feladat lista</h1>
    <div v-for="t in taskStore.tasks" :key="t.id" class="task">
      <h3>{{ t.title }}</h3>
      <div class="footer">
        <button @click="menjEdit(t.id)">Szerkesztés</button>
        <button @click="kesz(t.id)">Kész</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .task h3{
    text-align: center;
  }
  .task>.footer{
    display: flex;
    justify-content: space-around;
  }
  .task>figure{
    height: 200px;
    display: flex;
    align-items: center;
  }
</style>

<script setup>
import {ref} from 'vue'
import { usetaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const taskStore = usetaskStore()
const route = useRoute()
const router = useRouter()
const menjEdit = (id)=>{
  //<RouterLink to="/editTask">EditTask</RouterLink>
  router.push(`/editTask/${id}`)
}
</script>




<!--<template>
    <div>
      <h1>Feladatok</h1>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <div>
            <strong>{{ task.title }}</strong> 
            <p>{{ task.desc }}</p>
            <p><strong>Határidő:</strong> {{ task.deadline }}</p>
            <p><strong>Állapot:</strong> {{ task.isFinished ? 'Kész' : 'Folyamatban' }}</p>
            <button @click="editTask(task.id)">Szerkesztés</button>
            <button @click="toggleTaskStatus(task.id)">
              {{ task.isFinished ? 'Visszavonás' : 'Készre állítás' }}
            </button>
          </div>
        </li>
      </ul>
      <router-link to="/newtask">Új feladat hozzáadása</router-link>
    </div>
</template>
  
<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    }
  },
  methods: {
    editTask(taskId) {
      this.$router.push(`/edittask/${taskId}`);
    },
    toggleTaskStatus(taskId) {
      this.$store.dispatch('toggleTaskStatus', taskId);
    }
  }
}
</script>-->