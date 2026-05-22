function Productlist()
{
     const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 79999,
      rating: 4.8,
      image:
        "hero.png",
    },
    {
      id: 2,
      title: "Laptop",
      price: 55999,
      rating: 4.5,
      image:
        "hero.png",
    },
    {
      id: 3,
      title: "Headphones",
      price: 2999,
      rating: 4.2,
      image:
        "hero.png",
    },
  ];
}

function ProductCard(p) {
  return (
    <div>
      <img src={p.image} alt={p.title}  />

      <h2>{p.title}</h2>

      <p>Price: ₹{p.price}</p>

      <p>Rating: {p.rating}</p>
    </div>
  );
}

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );

  export default ProductCard

