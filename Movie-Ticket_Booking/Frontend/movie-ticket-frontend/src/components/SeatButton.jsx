export default function SeatButton({ seat, isSelected, onClick }) {
  if (seat.isBooked) {
    return (
      <button
        disabled
        className="w-12 h-12 m-2 rounded bg-red-600 text-white cursor-not-allowed"
      >
        {seat.seatNumber}
      </button>
    );
  }
  if (isSelected) {
    return (
      <button
        onClick={() => onClick(seat)}
        className="w-12 h-12 m-2 rounded bg-blue-600 text-white"
      >
        {seat.seatNumber}
      </button>
    );
  }

  return (
    <button
      onClick={() => onClick(seat)}
      className="w-12 h-12 m-2 rounded bg-green-600 text-white hover:bg-green-700"
    >
      {seat.seatNumber}
    </button>
  );
}
