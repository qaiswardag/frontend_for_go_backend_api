import { useUserStore } from '../stores/user';

export function setupAuthGuard(router) {
  const userStore = useUserStore();

  router.beforeEach(async (to, from, next) => {
    await userStore.setLoadUser();

    if (
      userStore.getUser &&
      userStore.getUser.fetchedDataUser &&
      userStore.getUser.fetchedDataUser.user
    ) {
      console.log(
        'Authentication succeeded:',
        userStore.getUser.fetchedDataUser.user.FirstName,
        userStore.getUser.fetchedDataUser.user.LastName
      );
    } else {
      console.log('Authentication failed.');
    }

    next();
  });
}
