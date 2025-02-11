import axios from "axios";


export const listUser = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/users", {
      headers: {
        authtoken,
      },
    });
  };
export const changeStatus = async (authtoken, value) => {
    return await axios.post(process.env.REACT_APP_API + "/change-status",value, {
      headers: {
        authtoken,
      },
    });
  };
export const changeRole = async (authtoken, value) => {
    return await axios.post(process.env.REACT_APP_API + "/change-role",value, {
      headers: {
        authtoken,
      },
    });
  };

  export const removeUser = async (authtoken, id) => {
    return await axios.delete(process.env.REACT_APP_API + "/users/"+id, {
      headers: {
        authtoken,
      },
    });
  };
  export const resetPassword = async (authtoken, id, values) => {
    return await axios.put(process.env.REACT_APP_API + "/users/" + id, values, {
      headers: {
        authtoken,
      },
    });
  };

  export const userCart = async (authtoken, cart) => {
    return await axios.post(process.env.REACT_APP_API + "/user/cart", { cart }, {
      headers: {
        authtoken,
      },
    });
  };
  
  
  export const getUserCart = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/cart", {
      headers: {
        authtoken,
      },
    });
  };

  export const emptyCart = async (authtoken) => {
    return await axios.delete(process.env.REACT_APP_API + "/user/cart", {
      headers: {
        authtoken,
      },
    });
  };
  

  //save address
  export const saveAddress = async (authtoken, address) => {
    return await axios.post(process.env.REACT_APP_API + "/user/address", { address }, {
      headers: {
        authtoken,
      },
    });
  };


  export const saveOrder = async (authtoken, images) => {
    return await axios.post(process.env.REACT_APP_API + "/user/order", { images }, {
      headers: {
        authtoken,
      },
    });
  };
  export const getOrders = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/orders", {
      headers: {
        authtoken,
      },
    });
  };

  //wishlist
  export const getWishlist = async (authtoken) => {
    return await axios.get(process.env.REACT_APP_API + "/user/wishlist", {
      headers: {
        authtoken,
      },
    });
  };
  export const addToWishlist = async (authtoken,productId) => {
    return await axios.post(process.env.REACT_APP_API + "/user/wishlist",{productId},{
      headers: {
        authtoken,
      },
    });
  };
  export const removeWishlist = async (authtoken,productId) => {
    return await axios.put(process.env.REACT_APP_API + "/user/wishlist/"+productId,{},{
      headers: {
        authtoken,
      },
    });
  };