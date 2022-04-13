import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "components/common/Loader";

const InvalidPage = React.lazy(
	() => import("containers/common/InvalidPage")
);
const Home = React.lazy(() => import("containers/Home/"));
const Contacts = React.lazy(() => import("containers/Contacts/"));
const PointOfSales = React.lazy(() => import("containers/PointOfSales"));
const InvoicesReturns = React.lazy(() => import("containers/InvoicesReturns"));
const Inventory = React.lazy(() => import("containers/Inventory"));
const Reports = React.lazy(() => import("containers/Reports"));
const Settings = React.lazy(() => import("containers/Settings"));
const Imprint = React.lazy(() => import("containers/Imprint"));

/**
 * Main Router
 * @returns JSX Element
 */
const MainRoutes = () : JSX.Element => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/contacts"} element={<Contacts />} />
					<Route path={"/ponts-of-sale"} element={<PointOfSales />} />
					<Route path={"/invoice-returns"} element={<InvoicesReturns />} />
					<Route path={"/inventory"} element={<Inventory />} />
					<Route path={"/reports"} element={<Reports />} />
					<Route path={"/settings"} element={<Settings />} />
					<Route path={"/imprint"} element={<Imprint />} />
					<Route path="*" element={<InvalidPage />} />
				</Routes>
			</Suspense>
		</Router>
	);
};

export default MainRoutes;
