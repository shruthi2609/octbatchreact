function ProductCatalog(props){
console.log(props.productProp.pname)

return(
    <div>
        <h1>{props.productProp.pname}</h1>
     <img src={props.productProp.imglink} alt="no img"></img>
    <a href={props.productProp.plink}>buy here</a>
    <h3>{props.productProp.price}</h3>
    </div>
)
}
export default ProductCatalog