import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/layout/MainLayout";
import { CategorySelection } from "./pages/CategorySelection";
import { CriteriaResults } from "./pages/CriteriaResults";
import { ProductDetail } from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: CategorySelection },
      { path: "criteria/:category", Component: CriteriaResults },
      { path: "product/:id", Component: ProductDetail },
    ],
  },
]);
