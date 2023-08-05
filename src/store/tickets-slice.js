/* eslint-disable prettier/prettier */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://aviasales-test-api.kata.academy/'
let fetchErrorCount = 0

export const fetchSearchId = createAsyncThunk('ticket/fetchSearchId', async function (_, { rejectWithValue }) {
  try {
    const searchIdResponse = await fetch(`${url}search`)

    if (!searchIdResponse.ok) {
      throw new Error("Can't fetch search id")
    }
    const data = await searchIdResponse.json()

    const searchId = data.searchId
    return searchId
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async function (searchId, { dispatch, rejectWithValue, getState }) {
    try {
      if (!searchId) {
        const fetchedId = await dispatch(fetchSearchId())
        searchId = fetchedId.payload
      }

      const ticketsHead = await fetch(`${url}tickets?searchId=${searchId}`)

      if (!ticketsHead.ok) {
        throw new Error("Can't fetch tickets")
      }

      const tickets = await ticketsHead.json()

      if (!tickets.stop) {
        dispatch(fetchTickets(searchId))
      } else {
        dispatch(stoppedFetching())
      }

      return tickets.tickets
    } catch (error) {
      if (!getState().tickets.tickets) return rejectWithValue(error.message)

      fetchErrorCount++
      if (fetchErrorCount > 8) {
        console.log(error.message)
        console.log("i'm done")
        return
      }

      dispatch(fetchTickets(searchId))
    }
  }
)

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    status: null,
    error: null,
    stillFetching: true,
    count: 5,
  },
  reducers: {
    stoppedFetching(state) {
      state.stillFetching = false
    },
    showMoreTickets(state) {
      state.count += 5
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.rejected, setRejectedState, 'search id error cmon')

      .addCase(fetchTickets.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.tickets = state.tickets.concat(action.payload)
        state.error = null
      })
      .addCase(fetchTickets.rejected, setRejectedState)
  },
})

export const { stoppedFetching, showMoreTickets } = ticketsSlice.actions

export default ticketsSlice.reducer

function setRejectedState(state, action, mes) {
  state.status = 'rejected'
  state.error = action.error.message + (mes ? mes : '')
}
