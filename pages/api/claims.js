export default function handler(req, res) {
    const claims = [
      { id: 1, date: '2025-01-28', status: 'Pending', amount: '$100' },
      { id: 2, date: '2025-02-28', status: 'Approved', amount: '$200' },
      { id: 3, date: '2023-03-28', status: 'Rejected', amount: '$300' },
    ];
  
    // Simulate a delay to mimic a real API call
    setTimeout(() => {
      res.status(200).json(claims);
    }, 1000); // 1-second delay
  }