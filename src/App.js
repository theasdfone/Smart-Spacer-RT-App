import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './features/homepage/mainpage';
import ProfilePage from './features/profile/profilepage';
import SpacerAnalyticsPage from './features/spacer-analytics-report/spaceranalytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/spaceranalytics' element={<SpacerAnalyticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
