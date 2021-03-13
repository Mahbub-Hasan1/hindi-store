import Link from 'next/link';

const index = ({ products }) => {
  console.log(products)

  const productList = products.map(product => {
    return (
      <div key={product._id} className="card">
        <div className="card-image">
          <img src={product.mediaUrl} alt={product.name} />
          <span className="card-title">{product.name}</span>
        </div>
        <div className="card-content">
          <p>{product.description}</p>
        </div>
        <div className="card-action">
          <p>price:{product.price}</p>
        </div>
        <div>
          <Link href={"/product/[id]"} as={`/product/${product._id}`}><a>view product details</a></Link>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h1>next js page</h1>
      <div className="rootCard">
        {productList}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}



export default index;