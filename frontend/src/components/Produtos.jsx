import './Produtos.less';
import ProductCard from './ProductCard';

function Produtos({ produtos }) {
  if (!produtos.length) return <p>Carregando produtos...</p>;

  return (
    <section className="products-section">
      <div className="products-header">
        <h1>Produtos</h1>
        <p>Veja nossa seleção de produtos naturais Naturelle.</p>
      </div>

      <div className="products-grid">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default Produtos;

