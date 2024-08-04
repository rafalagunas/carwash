import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RoutesWithNotFound from './utils/routes-with-not-found';
import RootPage from './pages/RootPage';

import './App.css';

// Carga diferida del componente ViewLoading
const ViewLoading = lazy(() => import('./pages/ViewLoading'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading ViewLoading...</div>}>
        <RoutesWithNotFound>
          <Route path="/" element={<RootPage />} />
          <Route path="/viewLoading" element={<ViewLoading />} />
        </RoutesWithNotFound>
      </Suspense>
    </Router>
  );
}

export default App;
