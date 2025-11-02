export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-xl font-semibold text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 overflow-hidden"
    >
      <span className="absolute inset-0 bg-blue-500/30 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      {text}
    </button>
  );
}

