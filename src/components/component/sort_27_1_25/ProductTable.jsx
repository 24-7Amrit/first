import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


const ProductTable=()=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
                
            </thead>
            <tbody>
                <ProductCategoryRow/>
                <ProductRow/>
            </tbody>
        </table>

    )
}