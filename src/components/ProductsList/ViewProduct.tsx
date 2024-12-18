import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore, Product as IProduct } from "../../stores/app-store";
import { toast } from "react-toastify";
interface ViewProductProps {
  product: IProduct;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((value: boolean) => boolean)) => void;
}
export default function ViewProduct(props: ViewProductProps) {
  const { product, isModalOpen, setIsModalOpen } = props;
  const { addCartProduct } = useAppStore(
    useShallow((state) => ({
      addCartProduct: state.addCartProduct,
    })),
  );
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50"></div>
  );
}
