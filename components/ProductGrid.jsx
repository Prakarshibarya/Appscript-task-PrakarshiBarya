import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
