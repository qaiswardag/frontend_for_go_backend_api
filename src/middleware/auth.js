import { getCookie } from '@/composables/getCookie';
import { useUserStore } from '../stores/user';

export default function setupAuthGuard(router) {
  const userStore = useUserStore();

  router.beforeEach((to, from, next) => {
    userStore.setLoadUser();
    next();
  });
}
