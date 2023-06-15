import * as data from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const list = data.default
  .filter((id) => id.author.id === userId)
  .map(({ context }) => context);
  return list;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const mySchema = [notification];
export const normalizedData = normalize(data, mySchema);
