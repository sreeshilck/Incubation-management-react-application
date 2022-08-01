import { configureStore } from '@reduxjs/toolkit'
import ApplicationSlice from '../features/Application/ApplicationSlice';
import SlotsSlice from '../features/Slots/SlotsSlice';

export const store = configureStore({
  reducer: {
        application: ApplicationSlice.reducer,
        slots: SlotsSlice.reducer,
  },
})




export default store;