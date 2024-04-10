export default function Subscribe() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h1>
          <form>
            <input
              className="p-2 border border-gray-300 rounded mb-4 w-full"
              type="email"
              placeholder="Your email"
            />
            <button
              className="w-full bg-blue-600 text-white p-2 rounded"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }