function Search({ searchTerm, setSearchTerm }) {
    return (
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Type here"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  }
  
  export default Search;
  