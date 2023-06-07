import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { History } from "./feature/history/History";
import About from "./feature/about/About";
import { CustomNavbar } from "./feature/nav/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ItemDetail } from "./feature/todo/todoitemDetail";

export const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div>
            <CustomNavbar />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/history" element={<History />} />
              <Route path="/about" element={<About />} />
              <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
