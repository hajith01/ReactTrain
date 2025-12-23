import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";
import SeatButton from "../components/SeatButton";

export default function Seats() {
  const { showId } = useParams();
  const navigate = useNavigate();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    API.get(`/seats/${showId}`).then(res => {
      setSeats(res.data);
    });
  }, [showId]);

  function toggleSeat(seat) {
    if (seat.isBooked) return;

    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seat.id));
      return;
    }

    if (selectedSeats.length >= 4) {
      alert("You can select a maximum of 4 seats.");
      return;
    }

    setSelectedSeats([...selectedSeats, seat.id]);
  }

  function proceedToSummary() {
    if (selectedSeats.length === 0) {
      alert("Please select at least 1 seat.");
      return;
    }

    navigate(`/summary/${showId}/${selectedSeats.join(",")}`);
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-4">Select Your Seats</h1>

      <div className="flex gap-6 mb-6 text-lg">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-600 rounded"></span>
          Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-600 rounded"></span>
          Booked
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-600 rounded"></span>
          Selected
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-200 p-6 rounded-lg shadow max-w-xl">
        {seats.map(seat => (
          <SeatButton
            key={seat.id}
            seat={seat}
            isSelected={selectedSeats.includes(seat.id)}
            onClick={toggleSeat}
          />
        ))}
      </div>

      <div className="mt-6 text-lg">
        <p>
          Selected Seats:
          <span className="font-bold ml-2">
            {selectedSeats.length > 0
              ? selectedSeats.join(", ")
              : "None"}
          </span>
        </p>
      </div>

      <button
        onClick={proceedToSummary}
        disabled={selectedSeats.length === 0}
        className={`mt-6 px-6 py-3 rounded text-white text-lg ${
          selectedSeats.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Continue
      </button>
    </div>
  );
}
