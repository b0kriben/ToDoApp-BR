import { ref } from "vue"
import { defineStore } from "pinia"

export const usetaskStore = defineStore('task', () => {
  const tasks = ref([
    {
      id: 1,
      title: 'Házi feladat',
      description: "az órán megbeszéltek alapján elvégezni a feladatot",
      isFinished: false,
      deadline: "2024-12-29",
    },
    {
      id: 2,
      title: 'Órai munka',
      description: "elvégezni a matematikai feladatokat",
      isFinished: false,
      deadline: "2024-9-30",
    },
    {
      id: 3,
      title: 'Projekt feladat',
      description: "saját tudás szerint leprogramozni a Backend-et",
      isFinished: false,
      deadline: "2024-10-12",
    },
    {
      id: 4,
      title: 'Csoport feladat',
      description: "vizsgaremek elkészítése",
      isFinished: false,
      deadline: "2025-5-15",
    }
  ])

  return {tasks}
})
