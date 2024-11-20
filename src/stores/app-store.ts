import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const LOCAL_STORAGE_KEY = "App";
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
interface AppStore {
  userToken: string | null;
  setUserToken: (userToken: string) => void;
  logOut: () => void;
  searchedProduct: string;
  setSearchedProduct: (searchedTitle: string) => void;
  clearSearchedProduct: () => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  selectedCategory: Category;
  setSelectedCategory: (selectedCategoryName: Category) => void;
  cartProducts: CartProduct[];
  addCartProduct: (product: Product) => void;
  decreaseProductQuantity: (cartProduct: CartProduct) => void;
  removeCartProduct: (product: Product) => void;
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        userToken: null,
        setUserToken: (userToken) => {
          set({ userToken });
        },
        logOut: () => {
          set({ userToken: null });
        },
        searchedProduct: "",
        setSearchedProduct: (searchedProduct) => {
          set({ searchedProduct });
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
        setSelectedCategory: (selectedCategory) => {
          set({ selectedCategory });
        },
        cartProducts: [],
        addCartProduct: (product) => {
          const previousCartProducts = get().cartProducts;
          let newCartProducts = [];
          let existingProductIndex = previousCartProducts.findIndex(
            (prod) => prod.id == product.id,
          );
          if (existingProductIndex == -1) {
            const newCartProduct = { ...product, quantity: 1 };
            newCartProducts = [...previousCartProducts, newCartProduct];
          } else {
            const existingCartProduct =
              previousCartProducts[existingProductIndex];
            const newProduct = {
              ...existingCartProduct,
              quantity: existingCartProduct.quantity + 1,
            };
            newCartProducts = [...previousCartProducts];
            newCartProducts[existingProductIndex] = newProduct;
          }

          set({
            cartProducts: newCartProducts,
          });
        },
        decreaseProductQuantity: (product) => {
          const previousCartProducts = get().cartProducts;
          let newCartProducts = [];
          let existElementIndex = previousCartProducts.findIndex(
            (prod) => prod.id == product.id,
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
            get().removeCartProduct(product);
          }
        },
        // TODO remove cart item with id
        removeCartProduct: (product) => {
          const previousCartProducts = get().cartProducts;
          const newCartProducts = previousCartProducts.filter(
            (prod) => prod.id !== product.id,
          );
          set({
            cartProducts: newCartProducts,
          });
        },
      }),

      {
        name: LOCAL_STORAGE_KEY,
        partialize: (state) => ({
          cartProducts: state.cartProducts,
          userToken: state.userToken,
        }),
      },
    ),
    { enabled: false, name: "appStore" },
  ),
);
