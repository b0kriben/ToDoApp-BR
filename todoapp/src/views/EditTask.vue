<template>
  <div class="container col-sm-12 col-md-6">
    <form @submit.prevent="saveTask" class="task">
      <div>
        <label for="title">Feladat Címe:&nbsp;</label>
        <input type="text" v-model="task.title" required />
      </div>
      <div>
        <label for="desc">Leírás:&nbsp;</label>
        <textarea v-model="task.desc" required></textarea>
      </div>
      <div>
        <label for="deadline">Határidő:&nbsp;</label>
        <input type="date" v-model="task.deadline" required />
      </div>
      <button type="submit">Mentés</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const route = useRoute();
const router = useRouter();
const store = useStore();

const task = ref({
  id: props.id,
  title: '',
  desc: '',
  isFinished: false,
  deadline: ''
});

onMounted(() => {
  const foundTask = store.getters.tasks.find(task => task.id === props.id);
  if (foundTask) {
    task.value = { ...foundTask };
  }
});

function saveTask() {
  store.dispatch('updateTask', task.value);
  router.push('/TaskList');
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.task {
  margin: 30px;
  padding-bottom: 20px;
  background-image: linear-gradient(to top left, #8C0D31, #221335);
  border-radius: 10px;
  color: white;
  padding: 10px;
  border: solid black 3px;
}
</style>
