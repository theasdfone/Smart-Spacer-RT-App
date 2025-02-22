import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './features/homepage/mainpage';
import ProfilePage from './features/profile/profilepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
