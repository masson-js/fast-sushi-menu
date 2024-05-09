import { useEffect, useState } from "react";


function PhiladelphiaSection({philadelphiaList}) {
  const [sushies, setSushiNames] = useState([]);

  useEffect(
  function sushiDisplayHandler() {
    setSushiNames(philadelphiaList)
  }, [philadelphiaList])

  function Ing(product) {
    return product.map((e) => (
      <span className="ingridients" key={e}>
        {e}
      </span>
    ));
  }

  return (
    <main className="products">
      {sushies.map((product) => (
        <div className="product" key={product.id}>
          <div className="top-section">
            <h1 className="title">{product.name}</h1>
          </div>
          <div className="ing-container">{Ing(product.ingidients)}</div>
          <div className="padding-section">
            <div className="twosec">
              <p className="product-quatity">Iłość: {product.quantity} szt.</p>
              <span className="product-weight">{product.weight} gr</span>
            </div>
            <span className="product-price">Price: {product.price.toFixed(2)} PLN</span>
          </div>
        </div>
      ))}
    </main>
  );
}

export default PhiladelphiaSection;