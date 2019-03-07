import {
  ORDER_CREATED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  listing: [],
};

const reducers = {
  [ORDER_CREATED]: (state, action) => {
    const { listing } = state;
    const { params } = action;
    return {
      ...state,
      listing: [
        ...listing,
        {
          ...params,
          items: params.items.map((i) => {
            return {
              color: i.color,
              id: i.id,
              name: i.name,
              price: i.price,
              qty: i.qty,
              slug: i.slug,
              type: i.type,
            };
          }),
        },
      ],
    };
  },
};

export default createReducer(initialState, reducers);
