import axios from 'axios';

export function getProductListHomePage({sortBy, page, search, sortType}){
  let params = {};
  if(sortBy) params.sortBy = sortBy;
  if(sortType) params.sortType = sortType;
  else if(search) params.search = search;
  else if(page) params.page = page;
  
  return axios.get('https://myeasykart.codeyogi.io/products/', {params}).then(function(response){
    return response.data;
  })
}
// export function getProductList(page){
//   return axios.get('https://myeasykart.codeyogi.io/products/?page='+page).then(function(response){
//     return response.data;
//   })
// }
export function getRelatedProductList(){
  return axios.get('https://myeasykart.codeyogi.io/products/').then(function(response){
    return response.data;
  })
}
export function getProductData(id){
  return axios.get('https://myeasykart.codeyogi.io/product/'+id).then(function(response){
    return response.data;
  });  
}
export function saveCart(cart){
  return axios.post('https://myeasykart.codeyogi.io/carts',{data: cart}, {
                    headers: {
                      Authorization: localStorage.getItem('user-token'),
                    },
                  })
  .then(function(response){
    return response.data;
  });  
}
export function getCart(){
  return axios.get('https://myeasykart.codeyogi.io/carts', {
    headers: {
      Authorization: localStorage.getItem('user-token'),
    },
  }).then(function(response){
    return response.data;
  });  
}
export function getProductByIds(ids){
  const commaSeperatedIds = ids.join();
  return axios.get("https://myeasykart.codeyogi.io/products/bulk",{
             params: {
               ids: commaSeperatedIds,
             },
  }).then(function(response){
    return response.data;
  });
}
