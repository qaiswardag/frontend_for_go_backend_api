import { useUserStore } from '../stores/user';

export function setupAuthGuard(router) {
  const userStore = useUserStore();

  router.beforeEach(async (to, from, next) => {
    await userStore.setLoadUser();

    if (
      userStore.getUser &&
      userStore.getUser.fetchedData &&
      userStore.getUser.fetchedData.user
    ) {
      console.log('user:', userStore.getUser.fetchedData.user);
    }

    next();
  });
}
