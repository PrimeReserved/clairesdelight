// store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/products/productsSlice";
import blogsReducer from "@/features/blogs/blogsSlice";
import newsReducer from "@/features/news/newsSlice";
import recipesReducer from "@/features/recipes/recipesSlice";
import reviewsReducer from '@/features/reviews/reviewsSlice';
import eventsReducer from '@/features/events/eventsSlice';
import cartsReducer from '@/features/carts/cartsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        blogs: blogsReducer,
        news: newsReducer,
        recipes: recipesReducer,
        reviews: reviewsReducer,
        events: eventsReducer,
        carts: cartsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

