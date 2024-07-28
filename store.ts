// store.ts
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/products/productsSlice";
import blogsReducer from "@/features/blogs/blogsSlice";
import newsReducer from "@/features/news/newsSlice";
import recipesReducer from "@/features/recipes/recipesSlice";
import reviewsReducer from "@/features/reviews/reviewsSlice";
import eventsReducer from "@/features/events/eventsSlice";
import cartsReducer from "@/features/carts/cartsSlice";
import ordersSlice from "./features/orders/ordersSlice";

// Combine your reducers
const rootReducer = combineReducers({
  products: productsReducer,
  blogs: blogsReducer,
  news: newsReducer,
  recipes: recipesReducer,
  reviews: reviewsReducer,
  events: eventsReducer,
  carts: cartsReducer,
  orders: ordersSlice
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts", "reviews", "events", "orders"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const   store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
          "persist/REGISTER",
        ],
      },
    }),
});


// const isClient = typeof window !== "undefined";

// let store: ReturnType<typeof configureStore>;
// let persistor: ReturnType<typeof persistStore> | null = null;

// if (isClient) {
//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [
//             "persist/PERSIST",
//             "persist/REHYDRATE",
//             "persist/PAUSE",
//             "persist/PURGE",
//             "persist/FLUSH",
//             "persist/REGISTER",
//           ],
//         },
//       }),
//   });

//   persistor = persistStore(store);
// } else {
//   store = configureStore({
//     reducer: rootReducer,
//   });
// }
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
