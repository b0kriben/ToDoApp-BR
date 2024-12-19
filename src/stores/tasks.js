import { ref } from "vue"
import { defineStore } from "pinia"

export const usetaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Házi feladat',
      description: "az órán megbeszéltek alapján elvégezni a feladatot",
      isFinished: false,
      deadline: 2024-12-29,
    },
    {
      id: 2,
      title: 'Órai munka',
      description: "elvégezni a matematikai feladatokat",
      isFinished: false,
      deadline: 2024-9-30,
    },
    {
      id: 3,
      title: 'Projekt feladat',
      description: "saját tudás szerint leprogramozni a Backend-et",
      isFinished: false,
      deadline: 2024-10-12,
    },
    {
      id: 4,
      title: 'Csoport feladat',
      description: "vizsgaremek elkészítése",
      isFinished: false,
      deadline: 2025-5-15,
    }
  ])

  /*function szavazok(id) {
    let tmp = madarak.value.find( (m) => m.id == id )
    tmp.szavazat = tmp.szavazat + 1 || 1
    console.log(madarak.value)    
  }

  return { madarak, szavazok }*/
})

/*import { createStore } from 'vue';

const store = createStore({
  state: {
    tasks: []  // A feladatok tárolása
  },
  mutations: {
    // Új feladat hozzáadása
    addTask(state, task) {
      state.tasks.push(task);
    },
    // Feladat módosítása
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    // Feladat állapotának módosítása
    toggleTaskStatus(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.isFinished = !task.isFinished;
      }
    }
  },
  actions: {
    // Az akciók hívják meg a mutációkat
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    updateTask({ commit }, task) {
      commit('updateTask', task);
    },
    toggleTaskStatus({ commit }, taskId) {
      commit('toggleTaskStatus', taskId);
    }
  },
  getters: {
    // A feladatokat getter segítségével érhetjük el
    tasks: state => state.tasks,
    unfinishedTasks: state => state.tasks.filter(task => !task.isFinished),
    finishedTasks: state => state.tasks.filter(task => task.isFinished)
  }
});

export default store;*/