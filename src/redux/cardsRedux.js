import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({ cards }, columnId) =>
  cards.filter((card) => card.columnId == columnId);

// action name creator
const reducerName = 'cards';
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

export const createActionAddCard = (payload) => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_CARD,
});

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
