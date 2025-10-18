const Search = () => {
  return (
    <div className="search-container" data-sal="fade"
      data-sal-duration="1000">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
      />
      <button className="search-button">
        <i className="search-icon fa-solid fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
