export default function PolicySummary() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Policy Summary</h2>
        <div className="flex items-center">
          <img src="/assets/images/petdog1.jpg" alt="Pet" className="h-16 w-16 rounded-full" />
          <div className="ml-4">
            <p className="font-semibold">Fluffy</p>
            <p>Dog | Golden Retriever | 3 years</p>
            <p>Plan: Premium | Coverage: $10,000 | Deductible: $500</p>
            <span className="bg-green-200 text-green-800 px-2 py-1 rounded">Active</span>
          </div>
        </div>
      </div>
    );
  }