import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CarbonFootprintTracker from './pages/carbon-footprint-tracker';
import Login from './pages/login';
import Register from './pages/register';
import ProductDetails from './pages/product-details';
import GroceryPlanGenerator from './pages/grocery-plan-generator';
import Dashboard from './pages/dashboard';
import AIMealPlanner from './pages/ai-meal-planner';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AIMealPlanner />} />
        <Route path="/carbon-footprint-tracker" element={<CarbonFootprintTracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/grocery-plan-generator" element={<GroceryPlanGenerator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-meal-planner" element={<AIMealPlanner />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;