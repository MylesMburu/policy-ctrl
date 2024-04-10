export default function Admin() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Send Newsletter Email</h1>
          <form>
            <input
              className="p-2 border border-gray-300 rounded mb-4 w-full"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="p-2 border border-gray-300 rounded mb-4 w-full"
              placeholder="Email body"
              rows="6"
            ></textarea>
            <button
              className="w-full bg-green-600 text-white p-2 rounded"
              type="submit"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    );
  }