import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const CART_LOCAL_STORAGE_KEY = "cart";

// interface AppStore {
//   searchedProduct: string;
//   setSearchedProduct: (value: string) => void;
//   clearSearchedProduct: () => void;
//   categories: string[];
//   setCategories: (value: []) => void;
//   selectedCategory: string;
//   setSelectedCategory: (value: string) => void;
//   addCartProduct: (value: Product) => void;
//   cartProducts: Product[];
//   decreaseProductQuantity: (value: Product) => void;
//   removeCartProduct: (value: Product) => void;
//   name: string;
//   enabled: boolean;
// }

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
// };

// type CartProduct = Product & {
//   quantity: number;
// };

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface CartProduct extends Product {
  quantity: number;
}

export type Category = string;
export interface AppStore {
  isAuthenticated: boolean;
  toggleIsAuthenticated: () => void;
  searchedProduct: string;
  setSearchedProduct: (value: string) => void;
  clearSearchedProduct: () => void;
  categories: Category[];
  setCategories: (category: Category[]) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  cartProducts: CartProduct[];
  addCartProduct: (product: Product) => void;
  decreaseProductQuantity: (cartProduct: CartProduct) => void;
  removeCartProduct: (cartProduct: CartProduct) => void;
}
export const useAppStore = create<AppStore>()(
  // persist(
  //   devtools(
  (set, get) => ({
    isAuthenticated: false,
    toggleIsAuthenticated: () => {
      const previousIsAuthenticated = get().isAuthenticated;
      set({ isAuthenticated: !previousIsAuthenticated });
    },
    searchedProduct: "",
    setSearchedProduct: (value) => {
      set({ searchedProduct: value });
    },
    clearSearchedProduct: () => {
      set({
        searchedProduct: "",
      });
    },

    categories: [],
    setCategories: (categories) => {
      set({ categories });
    },
    // TODO: fetch first category dynamically
    selectedCategory: "",
    setSelectedCategory: (selectedCategoryName) => {
      set({ selectedCategory: selectedCategoryName });
    },
    cartProducts: [],

    addCartProduct: (product) => {
      const previousCartProducts = get().cartProducts;
      let newCartProducts = [];
      let existingCartProductIndex = previousCartProducts.findIndex(
        (prod) => prod.id == product.id,
      );
      if (existingCartProductIndex == -1) {
        const newCartProduct = { ...product, quantity: 1 };
        newCartProducts = [...previousCartProducts, newCartProduct];
      } else {
        const existingCartProduct =
          previousCartProducts[existingCartProductIndex];
        const newProduct = {
          ...existingCartProduct,
          quantity: existingCartProduct.quantity + 1,
        };
        newCartProducts = [...previousCartProducts];
        newCartProducts[existingCartProductIndex] = newProduct;
      }

      set({
        cartProducts: newCartProducts,
      });
    },
    decreaseProductQuantity: (cartProduct) => {
      const previousCartProducts = get().cartProducts;
      let newCartProducts = [];
      let existElementIndex = previousCartProducts.findIndex(
        (prod) => prod.id == cartProduct.id,
      );
      const existingCartProduct = previousCartProducts[existElementIndex];
      if (existingCartProduct.quantity > 1) {
        const newProduct = {
          ...existingCartProduct,
          quantity: existingCartProduct.quantity - 1,
        };
        newCartProducts = [...previousCartProducts];
        newCartProducts[existElementIndex] = newProduct;
        set({
          cartProducts: newCartProducts,
        });
      } else {
        get().removeCartProduct(cartProduct);
      }
    },
    // TODO remove cart item with id
    removeCartProduct: (cartProduct) => {
      const previousCartProducts = get().cartProducts;
      const newCartProducts = previousCartProducts.filter(
        (prod) => prod.id !== cartProduct.id,
      );
      set({
        cartProducts: newCartProducts,
      });
    },
  }),
  //   {
  //     name: CART_LOCAL_STORAGE_KEY,
  //     partialize: (state) => ({
  //       cartProducts: state.cartProducts,
  //       isAuthenticated: state.isAuthenticated,
  //     }),
  //   },
  // ),
  // { enabled: false, name: "appStore" },
  // ),
);
