import { FC, useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string, year: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleSearch = () => {
    onSearch(searchTerm, year);
  };

  return (
    <div className="my-4 flex justify-center flex-col gap-2 sm:gap-0 sm:flex-row">
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-xl py-2 px-3 mr-2 text-black"
      />
      <input
        type="number"
        placeholder="Year(Optional)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border rounded-xl py-2 px-3 mr-2 text-black sm:w-4/12"
      />
      <button onClick={handleSearch} className="boreder rounded-xl bg-blue-500 text-white py-2 hover:opacity-90 w-5/12 sm:w-1/6">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
