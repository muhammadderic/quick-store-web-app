import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:5000";

export const useProductStore = create((set) => (
  {
    // products state
    products: [],
    loading: false,
    error: null,

    fetchProducts: async () => {
      set({ loading: true });
      try {
        const response = await axios.get(`${BASE_URL}/api/products`);
        set({
          products: response.data.data,
          error: null,
        });
      } catch (error) {
        console.log(error);
        set({
          products: [],
          error: "Something went wrong",
        });
      } finally {
        set({ loading: false });
      }
    }
  }
))