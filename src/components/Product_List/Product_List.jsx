import Product from "../Product";

export default function Product_List(props) {
  return (
    <section className="container-categories mb-20 flex w-full flex-row flex-wrap justify-center gap-12">
      {props.productsArray.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            setCartProducts={props.setCartProducts}
            cartProducts={props.cartProducts}
          />
        );
      })}
    </section>
  );
}
