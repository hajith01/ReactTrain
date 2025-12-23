import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Summary() {
  const { showId, seatIds } = useParams();
  const navigate = useNavigate();

  const selectedSeatIds = seatIds.split(",").map(Number);

  const [show, setShow] = useState(null);
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const PRICE = 150;

  useEffect(() => {
    API.get(`/shows/${showId}`).then(res => {
      setShow(res.data);
      setMovie(res.data.movie);
    });

    API.get(`/seats/${showId}`).then(res => {
      const filtered = res.data.filter(seat =>
        selectedSeatIds.includes(seat.id)
      );
      setSeats(filtered);
    });
  }, [showId, seatIds]);

  const confirmBooking = async () => {
    if (!userName || !phone) {
      alert("Please enter name and phone number");
      return;
    }

    try {
      const paymentSuccess = true;
      if (!paymentSuccess) return;

      const response = await API.post("/bookings", {
        showId,
        seatIds: selectedSeatIds,
        userName,
        phone
      });

      navigate(`/booking/${response.data.id}`);
    } catch (err) {
      alert("Booking failed");
      console.error(err);
    }
  };

  if (!show || !movie) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto border border-black rounded-lg shadow mt-12">
      <h1 className="text-2xl font-bold mb-4">Booking Summary</h1>

      <p><b>Movie:</b> {movie.title}</p>
      <p><b>Show Time:</b> {new Date(show.startTime).toLocaleString()}</p>
      <p><b>Seats:</b> {seats.map(s => s.seatNumber).join(", ")}</p>
      <p><b>Price per Seat:</b> ₹{PRICE}</p>

      <p className="text-lg font-bold mt-2">
        Total: ₹{PRICE * seats.length}
      </p>

      <button
        onClick={() => setShowForm(true)}
        className="w-full mt-4 bg-green-600 text-white py-2 rounded"
      >
        Confirm Booking
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-80 border border-black">
            <h2 className="text-lg font-bold mb-3">Enter Details</h2>

            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className="w-full border p-2 mb-3"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border p-2 mb-4"
            />

            <button
              onClick={confirmBooking}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
