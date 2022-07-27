import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "First Book I ever Wrote",
  },
  {
    id: "p2",
    price: 9,
    title: "My Second Book",
    description: "Second Book I ever Wrote",
  },
];

const Products = (props) => {
  const productItemsArray = DUMMY_PRODUCTS.map((product) => {
    return (
      <ProductItem
        key={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    );
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItemsArray}</ul>
    </section>
  );
};

export default Products;
