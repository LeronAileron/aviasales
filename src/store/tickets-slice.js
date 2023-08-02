import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://aviasales-test-api.kata.academy/'

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async function (_, rejectWithValue) {
    try {
      const searchIdResponse = await fetch(`${url}search`)

      if (!searchIdResponse.ok) {
        // eslint-disable-next-line prettier/prettier
        throw new Error('Can\'t fetch search id')
      }
      const data = await searchIdResponse.json()

      const searchId = data.searchId
      const ticketsHead = await fetch(`${url}tickets?searchId=${searchId}`)

      if (!ticketsHead.ok) {
        // eslint-disable-next-line prettier/prettier
        throw new Error('Can\'t fetch tickets')
      }

      const tickets = await ticketsHead.json()
      console.log(tickets)
      return tickets
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: {},
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = 'resolved'
      console.log('action: ', action)
      state.tickets = action.payload
      state.error = null
    },
    [fetchTickets.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.error.message
    },
  },
})

export default ticketsSlice.reducer
