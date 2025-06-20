import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable=()=>{
    const [SearchText,setSearchText]=React.useState('');
    const [inStockOnly,setInStockOnly]=React.useState(false);

    return(
        <>
            <SearchBar searchText={searchText} inStockOnly={inStockOnly}/>
            <ProductTable searchText={searchText} inStockOnly={inStockOnly}/>

        </>
    )
}