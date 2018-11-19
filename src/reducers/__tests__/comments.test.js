import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment',
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New comment'])
});

it('handles actions of unknown type', () => {
  const action = {
    type: 'TEST_ACTION',
    payload: 'test payload',
  };
  const newState = commentsReducer(['test'], {});
  expect(newState).toEqual(['test'])
});

