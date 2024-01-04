import logo from './logo.svg';
import './App.css';
import CalendarPage from "./views/Calendar/CalendarPage";
import LoginPage from "./views/LoginPage";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import EventForm from './views/EventForm';

const App = () => {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        {/* eventually make into a private route */}
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/event-form' element={<EventForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
