import { useParams } from "react-router-dom";

export default function Booking() {
  const { bookingId } = useParams();

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600">Booking Confirmed!</h1>
      <p className="text-xl mt-4">Your Booking ID:</p>
      <p className="text-3xl font-bold mt-2">{bookingId}</p>
    </div>
  );
}
