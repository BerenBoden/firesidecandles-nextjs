export default function Button({ text }: { text: string }) {
  return (
    <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
      {text}
    </button>
  );
}
