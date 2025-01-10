<template>
  <div class="container col-sm-12 col-md-6">
    <form @submit.prevent="addNewTask" class="task">
      <div>
        <label for="title">Feladat Címe:&nbsp;</label>
        <input type="text" v-model="task.title" required />
      </div><br>
      <div>
        <label for="desc">Leírás:&nbsp;</label><br>
        <textarea v-model="task.desc" required></textarea>
      </div><br>
      <div>
        <label for="deadline">Határidő:&nbsp;</label>
        <input type="date" v-model="task.deadline" required />
      </div><br>
      <button type="submit">Mentés</button>
    </form>
  </div>
</template>
  
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

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  label{
    font-weight: bold;
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
