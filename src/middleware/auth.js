import { getCookie } from '@/composables/getCookie';
import { useUserStore } from '../stores/user';

export default function setupAuthGuard(router) {
  // console.log('Session Token:', getCookie('session_token'));
  // console.log('CSRF Token:', getCookie('csrf_token'));

  const userStore = useUserStore();

  router.beforeEach((to, from, next) => {
    userStore.setLoadUser();
    next();
  });
}
