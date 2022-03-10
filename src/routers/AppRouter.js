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
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();
// const histo = BrowserRouterProps()

const AppRouter = () => (
  <HistoryRouter history={history}>
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        //! Route V6 uses this to properly use Private routes
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <ExpenseDashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="create"
          element={
            <PrivateRoute>
              <AddExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/"
          element={
            <PrivateRoute>
              <EditExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditExpensePage />
            </PrivateRoute>
          }
        />
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </HistoryRouter>
);

export default AppRouter;
