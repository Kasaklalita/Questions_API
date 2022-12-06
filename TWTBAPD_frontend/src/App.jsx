import React from "react";
import MainNavbar from "./components/layout/MainNavbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import CategoryPage from "./routes/CategoryPage";
import QuestionDetailPage from "./routes/QuestionDetailPage";

function App() {
	return (
		<div className="App">
			<MainNavbar />
			<div className="columns m-4">
				<div className="column is-2"></div>
				<div className="column is-8">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/:category" element={<CategoryPage />} />
						<Route
							path="/:category/:question_id"
							element={<QuestionDetailPage />}
						/>
						{/* <Route path="/:category/:question" element={<CategoryPage />} /> */}
					</Routes>
				</div>
				<div className="column is-2"></div>
			</div>
		</div>
	);
}

export default App;
