import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scategoriesReducer from '../features/scategorieSlice';
import categorieReducer from '../features/categorieSlice';
import authReducer from "../features/AuthSlice"


const store = configureStore({
reducer: {
storearticles:articlesReducer,
storecart:cartSliceReducer,
storecategories:categorieReducer,
storescategories:scategoriesReducer,
auth:authReducer
}
})
export default store
