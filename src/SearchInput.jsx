const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Поиск по имени..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

export default SearchInput