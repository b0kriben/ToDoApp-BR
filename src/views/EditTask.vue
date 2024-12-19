<template>
  <div class="container col-sm-12 col-md-6">
    <h1 class="text-center">Feladat Szerkesztése</h1>
    <form @submit.prevent="saveTask">
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
  props: ['id'],
  data() {
    return {
      task: {
        id: this.id,
        title: '',
        desc: '',
        isFinished: false,
        deadline: ''
      }
    };
  },
  created() {
    const task = this.$store.getters.tasks.find(task => task.id === this.id);
    if (task) {
      this.task = { ...task };
    }
  },
  methods: {
    saveTask() {
      this.$store.dispatch('updateTask', this.task);
      this.$router.push('/tasks');
    }
  }
}
</script>


<!--<template>
  <div class="container col-sm-12 col-md-6">
    <h1 class="text-center">Feladat Szerkesztése</h1>
    <form @submit.prevent="saveTask">
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
  props: ['id'],
  data() {
    return {
      task: {
        id: this.id,
        title: '',
        desc: '',
        isFinished: false,
        deadline: ''
      }
    };
  },
  created() {
    const task = this.$store.getters.tasks.find(task => task.id === this.id);
    if (task) {
      this.task = { ...task };  // Feladat adatainak betöltése
    }
  },
  methods: {
    saveTask() {
      this.$store.dispatch('updateTask', this.task);
      this.$router.push('/tasks');
    }
  }
}
</script>-->