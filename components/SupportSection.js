export default function SupportSection() {
    return (
      <div className="fixed bottom-4 right-4">
       <button
  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
  className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
>
  Live Chat
</button>
      </div>
    );
  }