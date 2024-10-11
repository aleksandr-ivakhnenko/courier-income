import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import Today from './pages/Today';
import Orders from './pages/Orders';
import Statistics from './pages/Statistics';
import Profile from './pages/Profile';
import CreateOrder from './pages/CreateOrder';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<LayoutWithNavbar />}>
					<Route path="/today" element={<Today />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/statistics" element={<Statistics />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/" element={<Navigate to="/Today" />} />
				</Route>
				<Route path="/create-order" element={<CreateOrder />} />
			</Routes>
		</Router>
	);

	function LayoutWithNavbar() {
		return (
			<>
				<Navbar />
				<Outlet />
			</>
		);
	};
}

export default App;