import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies.jsx";
import Shows from "./pages/Shows.jsx";
import Seats from "./pages/Seats.jsx";
import Booking from "./pages/Booking.jsx";
import Summary from "./pages/Summary.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home2 from "./pages/Home2.jsx";

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="min-h-[calc(100vh-160px)]">
      <Routes>
          <Route path="/" element={<Home2 />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/shows" element={<Shows />} />
          <Route path="/shows/:showId/seats" element={<Seats />} />
          <Route path="/booking/:bookingId" element={<Booking />} />
          <Route path="/summary/:showId/:seatIds" element={<Summary />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
