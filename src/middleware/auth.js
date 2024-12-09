import { getCookie } from '@/composables/getCookie';
import { useUserStore } from '../stores/user';

export default function setupAuthGuard(router) {
  const userStore = useUserStore();

  console.log('middleware køre:');
  // console.log('Session Token:', getCookie('session_token'));
  // console.log('CSRF Token:', getCookie('csrf_token'));

  router.beforeEach((to, from, next) => {
    userStore.setLoadUser();
    next();
  });
}
