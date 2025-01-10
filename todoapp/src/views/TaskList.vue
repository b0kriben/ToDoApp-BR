<template>
  <div class="h1">
      <h1>TaskList</h1>
  </div>
  <div class="container col-sm-12 col-md-12"><br>
    <div v-for="t in taskStore.tasks" :key="t.id" class="task">
      <p><strong>{{ t.title }}</strong></p>
      <p><strong>Leírás:</strong> {{ t.description }}</p>
      <p><strong>Kész a feladat:</strong> {{ t.isFinished }}</p>
      <p><strong>Határidő:</strong> {{ t.deadline }}</p>
      <div class="footer">
        <button @click="menjEdit(t.id)">Szerkesztés</button>
        <button @click="kesz(t.id)">Kész</button>
      </div>

    </div>
  </div>
</template>

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

<style scoped>
.h1{
  text-align: center;
}
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
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
  .task{
    margin: 30PX;
    padding-bottom: 20px;
    background-image: linear-gradient(to top left, #8C0D31, #221335);
    border-radius: 10px;
    color: white;
    padding: 10px;
    border: solid black 3px;
  }
</style>
