export default function Claims() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
            Claims
          </h1>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Claim #1</h2>
              <p className="text-gray-600">This is the details of Claim #1.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Claim #2</h2>
              <p className="text-gray-600">This is the details of Claim #2.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">Claim #3</h2>
              <p className="text-gray-600">This is the details of Claim #3.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }