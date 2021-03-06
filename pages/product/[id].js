import {useRouter} from 'next/router'

const Product = ({product}) => {
    const router = useRouter()
    if (router.isFallback) {
        return(
            <h3>loading.......</h3>
        )
    }
    return(
        <div>
            <h1>Product details page" {product.name}</h1>
        </div>
    )
}


// export async function getServerSideProps({params:{id}}){
//     const res = await fetch(`http://localhost:3000/api/product/${id}`)
//     const data = await res.json()

//     return{
//         props:{
//             product:data
//         }
//     }
// }

export async function getStaticProps({params:{id}}){
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()

    return{
        props:{
            product:data
        }
    }
}

export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: '603863766698c4feced66477' } } // See the "paths" section below
      ],
      fallback: true // See the "fallback" section below
    };
  }

export default Product