import React, { createContext, useState , useEffect } from 'react';

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

const [hasError, setErrors] = useState(false);

const [products, setProducts] = useState(null);

const fetchData = async () => {

 const res = await fetch(`${process.env.REACT_APP_HOST}/products`);
 res
   .json()
   .then((res) =>{
      setProducts(res)
      console.log("success",res)
    })
   .catch((err) => setErrors("error :",err));

}

useEffect(() => {
 fetchData();
}, []);


    return (
      <>
      { products && <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
      }
      </>
     );
}

export default ProductsContextProvider;
