<template>
  <div class="container col-sm-12 col-md-6">
    <h1 class="text-center">Új Feladat</h1>
    <form @submit.prevent="addNewTask">
      <div>
        <label for="title">Feladat Címe:</label>
        <input type="text" v-model="task.title" required />
      </div>
      <div>
        <label for="desc">Leírás:</label>
        <textarea v-model="task.desc" required></textarea>
      </div>
      <div>
        <label for="deadline">Határidő:</label>
        <input type="date" v-model="task.deadline" required />
      </div>
      <button type="submit">Mentés</button>
    </form>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
</style>
  
<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

export default {
  data() {
    return {
      task: {
        id: Date.now(),
        title: '',
        desc: '',
        isFinished: false,
        deadline: ''
      }
    };
  },
  methods: {
    addNewTask() {
      this.$store.dispatch('addTask', this.task);
      this.$router.push('/TaskList');
    }
  }
}
</script>


<!--<template>
  <div>
    <h1>Új Feladat</h1>
    <form @submit.prevent="addNewTask">
      <div>
        <label for="title">Feladat Címe:</label>
        <input type="text" v-model="task.title" required />
      </div>
      <div>
        <label for="desc">Leírás:</label>
        <textarea v-model="task.desc" required></textarea>
      </div>
      <div>
        <label for="deadline">Határidő:</label>
        <input type="date" v-model="task.deadline" required />
      </div>
      <button type="submit">Mentés</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      task: {
        id: Date.now(),  // Egyedi azonosító generálása
        title: '',
        desc: '',
        isFinished: false,
        deadline: ''
      }
    };
  },
  methods: {
    addNewTask() {
      this.$store.dispatch('addTask', this.task);
      this.$router.push('/tasks');  // Átirányítás a feladatok listájára
    }
  }
}
</script>-->