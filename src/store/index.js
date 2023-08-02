import { configureStore } from '@reduxjs/toolkit'

import mostSortReducer from './most-sort-slice'
import transferReducer from './transfers-slice'
import ticketsReducer from './tickets-slice'

export default configureStore({
  reducer: {
    most: mostSortReducer,
    transfer: transferReducer,
    tickets: ticketsReducer,
  },
})
