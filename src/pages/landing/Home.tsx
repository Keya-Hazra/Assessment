 /* eslint-disable */
import { Button, CircularProgress, Menu, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import AssessmentIcon from "../../components/ui/icons";
import { AssessmentApi } from "../../config";

  
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

  interface IProductList {
  data: IData[];
  
}
 const fetchProducts = async () => {
  const response = await AssessmentApi.get(`products`);
  console.log(21,response)
  return response;
};
function Home() {
 const navigate = useNavigate();
   
   const productsList = useQuery<IProductList, Error>(
    ['products-Lists'],
    async () => {
      return await fetchProducts();
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: 1,
    },
  );

  return (
    <>
      <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="flex items-center whitespace-nowrap">
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">ID</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Title</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Price</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Description</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Category</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Image</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Rate</span>
                </TableCell>
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Count</span>
                </TableCell>
              
                <TableCell>
                  <span className="pb-4 font-normal text-left text-purple-500 whitespace-nowrap">Actions</span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-white">
            {productsList.data ?
            productsList.data.data.length > 0 &&
            productsList.data.data.map((v, i) => (
            <TableRow key={v.id}>
                    <TableCell className="text-white">{v.id}</TableCell>
                    <TableCell className="text-white">{v.title}</TableCell>
                    <TableCell className="text-white">{v.price}</TableCell>
                    <TableCell className="text-white">
                      <span>{v.description}</span>
                    </TableCell>
                    <TableCell className="text-white">
                      <span> {v.category}</span>
                    </TableCell>
                    <TableCell className="text-white">
                      <span> {v.image}</span>
                    </TableCell>
                    <TableCell className="text-white">
                      <span> {v.rating.rate}</span>
                    </TableCell>
                    <TableCell className="text-white">
                      <span> {v.rating.count}</span>
                    </TableCell>
                
                    <TableCell>
                      <div className="flex justify-end">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                          {(popupState) => (
                            <React.Fragment>
                              <Button {...bindTrigger(popupState)}>
                                <AssessmentIcon name="list" className="flex-row w-8 h-8 opacity-50 fill-current" />
                              </Button>
                              <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={() => navigate(`/landing/ProductsDetails/${v.id}`)}>View</MenuItem>
                            
                              </Menu>
                            </React.Fragment>
                          )}
                        </PopupState>
                      </div>
                    </TableCell>
            </TableRow>
            )):(
            <TableRow>
                  <TableCell align="left" colSpan={10}>
                    {productsList.isLoading ? (
                      <div className="flex items-center justify-center">
                        <CircularProgress color="primary" />
                      </div>
                    ) : (
                      'No Products Found'
                    )}
                  </TableCell>
            </TableRow>
            )}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default Home;


