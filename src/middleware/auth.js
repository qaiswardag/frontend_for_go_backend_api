import { getCookie } from '@/composables/getCookie';
import { useRouter } from 'vue-router';

const router = useRouter();

router.beforeEach((to, from, next) => {
  console.log('Session Token:', getCookie('session_token'));
  console.log('CSRF Token:', getCookie('csrf_token'));
  next();
});
