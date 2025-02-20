import { createContext, useEffect, useState } from "react";
import { list_comic } from '../assets/assets';
import axios from "axios";
import { use } from "react";

export const StoreContext = createContext(null)

const StoreConTextProvider = (props) => {
    const [cartItem, setCartItem] = useState({})
    const [token, setToken] = useState('')
    const [chapChange, setChapChange] = useState('1')
    const [chap, setChap] = useState('chap1')
    // const [food_list, setFood_List] = useState([])
    const [orderData, setOrderData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        street: '',
        city: '',
        ward: '',
        district: '',
        phone: ''
    })
    const url = 'http://localhost:4000' // local api                                                                                              ' // local api
    // const url = 'https://7c78-27-75-104-167.ngrok-free.app/' //ngrok api
    const vnd = Intl.NumberFormat('vn', {
        style: 'currency',
        currency: 'VND',
    })
    const viewer = (number) => {
        return Intl.NumberFormat('vn').format(
            number,
        )
    }
    
    const addToCart = (itemId) => {

        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        
       
        // if (token) {
        //     await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } })
        // }
        // console.log('log cart', cartItem);
    }
    const removeCartItem = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        
       
        // if (token) {
        //     await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } })
        // }
    }
    const deleteCartItem = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: 0 }))
      
        // if (token) {
        //     await axios.post(url + '/api/cart/delete', { itemId }, { headers: { token } })
        // }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItem) {

            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += typeof (itemInfo.price) === 'string' ? Number(itemInfo.price) : itemInfo.price * cartItem[item]
                }
            }
        }
        return totalAmount;
    }
    // const fechFoodList = async () => {
    //     const res = await axios.get(url + '/api/food/list')
    //     setFood_List(res.data.data)
    // }
    // const fechCartData = async (token) => {
    //     const res = await axios.post(url + '/api/cart/get', {}, { headers: { token } })

    //     setCartItem(res.data.cartData)

    // }
    useEffect(() => {
        async function loadData() {
            // await fechFoodList()
        
            if (localStorage.getItem('token')) {
                await setToken(localStorage.getItem('token'))
                // await fechCartData(localStorage.getItem('token'))
            }
        }
        loadData();
    }, [])

    const contextValue = {
        cartItem,
        setCartItem,
        addToCart,
        removeCartItem,
        deleteCartItem,
        getTotalCartAmount,
        url,
        vnd,
        token,
        setToken,
        orderData,
        setOrderData,
        list_comic,
        viewer,
        chapChange,
        setChapChange,
        chap, 
        setChap,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreConTextProvider;
