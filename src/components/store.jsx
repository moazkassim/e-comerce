import { create } from "zustand";

export const CART_LOCAL_STORAGE_KEY = "cart";
// TODO: merge multiple items in one cart item with quantity key
export const useAppStore = create((set, get) => ({
  searchedProduct: "",
  setSearchedProduct: (searchedTitle) => {
    set({ searchedProduct: searchedTitle });
  },
  clearSearchedProduct: () => {
    set({
      searchedProduct: "",
    });
  },
  cartVisible: false,
  setCartVisible: () => {
    set((prevState) => ({
      cartVisible: !prevState.cartVisible,
    }));
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
  hydrateCartProducts: () => {
    const localStorageCartProducts = localStorage.getItem(
      CART_LOCAL_STORAGE_KEY,
    );
    if (localStorageCartProducts) {
      try {
        const cartProducts = JSON.parse(localStorageCartProducts);
        set({
          cartProducts: cartProducts,
        });
      } catch (err) {
        set({
          cartProducts: [],
        });
      }
    }
  },
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
      const existingCartProduct = previousCartProducts[indexOfExistElement];
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
    localStorage.setItem(
      CART_LOCAL_STORAGE_KEY,
      JSON.stringify(newCartProducts),
    );
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
      localStorage.setItem(
        CART_LOCAL_STORAGE_KEY,
        JSON.stringify(newCartProducts),
      );
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
    localStorage.setItem(
      CART_LOCAL_STORAGE_KEY,
      JSON.stringify(newCartProducts),
    );
  },
}));
