export default function PersonalizedInsights() {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Personalized Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">Pet Care Tips</p>
            <p>Brush your pet's teeth regularly for better health.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">Discounts</p>
            <p>Get 20% off on vet services this month.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">Cost-Saving Tips</p>
            <p>Switch to annual plans for better savings.</p>
          </div>
        </div>
      </div>
    );
  }