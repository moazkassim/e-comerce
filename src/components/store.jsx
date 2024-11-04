import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const CART_LOCAL_STORAGE_KEY = "cart";

export const useAppStore = create(
  persist(
    devtools(
      (set, get) => ({
        searchedProduct: "",
        setSearchedProduct: (searchedTitle) => {
          set({ searchedProduct: searchedTitle });
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
          let indexOfExistElement = previousCartProducts.findIndex(
            (prod) => prod.id == product.id,
          );
          if (indexOfExistElement == -1) {
            const newCartProduct = { ...product, quantity: 1 };
            newCartProducts = [...previousCartProducts, newCartProduct];
          } else {
            const existingCartProduct =
              previousCartProducts[indexOfExistElement];
            const newProduct = {
              ...existingCartProduct,
              quantity: existingCartProduct.quantity + 1,
            };
            newCartProducts = [...previousCartProducts];
            newCartProducts[indexOfExistElement] = newProduct;
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
        name: CART_LOCAL_STORAGE_KEY,
        partialize: (state) => ({ cartProducts: state.cartProducts }),
      },
    ),
    { enabled: false, name: "appStore" },
  ),
);
