
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

import LoginPage from "../components/LoginPage";
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import Header from "../components/Header"
import HelpPage from "../components/HelpPage"
import NotFoundPage from "../components/NotFoundPage"

export const history = createBrowserHistory()
// const histo = BrowserRouterProps()


const AppRouter = () => (
  <HistoryRouter history={history}>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<ExpenseDashboardPage />} />
        <Route path="create" element={<AddExpensePage />} />
        <Route path="/edit/" element={<EditExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </HistoryRouter>
);

export default AppRouter;
