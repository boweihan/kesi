import * as FastActions from 'src/actions/fastActions';
import * as StatActions from 'src/actions/statActions';
import * as NotificationActions from 'src/actions/notificationActions';

export const ActionCreators = Object.assign(
  {},
  FastActions,
  StatActions,
  NotificationActions,
);
