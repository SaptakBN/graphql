export function HomeInputs() {
  return (
    <div className="flex justify-between items-center mb-4 gap-4">
      <input
        className="w-full border border-gray-300 rounded-md h-full px-4 py-2"
        placeholder="Search posts..."
        type="text"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[200px]">Create Post</button>
    </div>
  );
}
