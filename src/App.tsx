import DisplayEvents from './components/MainPage';
import LoginPage from './components/Auth/LoginPage';
import RegistrationPage from './components/Auth/RegistrationPage';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/" element={<DisplayEvents />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
        </Routes>
    );
}

export default App;

