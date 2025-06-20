const SearchBar = ({searchText,inStockOnly})=> {
    return(
        <form>
            <input type="text" plaeholder="search" value={searchText} />
            <div>
                <input id="checkbox" type="checkbox" />
                <label htmlFor="checkbox"> Show Only in stock</label>
            </div>
        </form>
    )
}