import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../views/TaskList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'tasks',
      component: TaskList,
    },
    { 
      path: '/newtask/', 
      name: 'newtask',
      component: () => import('../views/NewTask.vue'),
    },
    { 
      path: '/edittask/:id', 
      name: 'edittask',
      component: () => import('../views/EditTask.vue'),
    }
  ],
});

export default router;