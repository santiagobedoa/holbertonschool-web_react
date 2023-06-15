import * as data from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  const list = data.default
  .filter((id) => id.author.id === userId)
  .map(({ context }) => context);
  return list;
}
