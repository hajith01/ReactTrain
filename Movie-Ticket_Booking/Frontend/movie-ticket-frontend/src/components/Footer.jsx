export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-xl font-semibold">MakeMyShow</h2>

        <div className="flex space-x-6 mt-4 md:mt-0">
         
        </div>

        <p className="text-gray-400 text-sm mt-4 md:mt-0">

            <br></br>© {new Date().getFullYear()} MakeMyShow. All Rights Reserved.
        </p>

      </div>  
    </footer>
  );
}
