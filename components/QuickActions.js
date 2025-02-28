import Link from 'next/link';

export default function QuickActions() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Intimate a Claim</button>
        <Link href="/settings">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Change Policy</button>
        </Link>
        <Link href="/intimateclaims">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Reimbursement Status</button>
        </Link>
      </div>
    </div>
  );
}