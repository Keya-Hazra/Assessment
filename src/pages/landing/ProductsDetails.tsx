 /* eslint-disable */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AssessmentApi } from "../../config";
import { addToCartAction } from "../../stores/CartReducer";


 interface IData{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate:number;
      count: number;
    }
  }    
  interface IProductDetails {
  data: IData;
  
}

 const fetchProductsDetails = async (id:string) => {
  const response = await AssessmentApi.get(`products/${id}`);
  console.log(21,response)
  return response;
};
function ProductsDetails() {
   const params = useParams();
  const [, setError] = useState<string>();
  const dispatch = useDispatch();

   
   const productsDetails = useQuery<IProductDetails, Error>(
    ['products-Details', params.id],
    async () => {
      return await fetchProductsDetails(params.id!);
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  );

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductDetails>({
    // resolver: yupResolver(validationSchema),
    mode: 'all',
    defaultValues: {},
  });

    const onSubmit = handleSubmit(async (data) => {
    console.log(74, data);
    try {
      dispatch(addToCartAction(data));
    
    } catch (error: any) {
      setError(error?.response?.data?.message || 'Something went wrong!');
    }
  });
  return (
    <>
      <div className="max-w-4xl p-6 border border-gray-200 bg-opacity-40 rounded-3xl text-">
      
        <h1 className="text-xl text-purple-500">Products Details</h1>
     
      <div>
        {productsDetails.data ? (
          <div>
            <div>
              <div className="grid max-w-lg grid-cols-2 gap-4 text-white md:grid-cols-6">
                <p className="col-span-2 font-semibold">ID:</p>
                <p className="col-span-4">{productsDetails.data.data.id}</p>
                <p className="col-span-2 font-semibold">Title:</p>
                <p className="col-span-4">{productsDetails.data.data.title}</p>
                <p className="col-span-2 font-semibold">Price:</p>
                <p className="col-span-4">{productsDetails.data.data.price}</p>
                <p className="col-span-2 font-semibold">Description:</p>
                <p className="col-span-4 ">{productsDetails.data.data.description}</p>
                <p className="col-span-2 font-semibold">Category:</p>
                <p className="col-span-4">{productsDetails.data.data.category}</p>
                <p className="col-span-2 font-semibold">Image:</p>
                <p className="col-span-4">{productsDetails.data.data.image}</p>
                <p className="col-span-2 font-semibold">rate:</p>
                <p className="col-span-4">{productsDetails.data.data.rating.rate}</p>
                <p className="col-span-2 font-semibold">Count:</p>
                <p className="col-span-4">{productsDetails.data.data.rating.count}</p>
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button onClick={onSubmit}  className="px-6 py-2 mx-5 font-medium text-white bg-purple-500 border rounded-md text-primary-400 focus:outline-none"
                 >Add To Cart</button>
            </div>
          </div>
        ) : (
          <div>
            <p>{productsDetails.isLoading ? 'Loading' : 'No Products Found.'}</p>
          </div>
        )}
     
      </div>
    </div>
    </>
  )
}

export default ProductsDetails;



