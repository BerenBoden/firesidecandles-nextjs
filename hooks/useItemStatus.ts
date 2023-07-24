import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

export function useItemStatus(id: number) {
  const dispatch = useAppDispatch();
  const [localWishlistItem, setLocalWishlistItem] = useState(false);
  const [localCartItem, setLocalCartItem] = useState(false);

  const isItemInWishlist = useAppSelector((state) =>
    Boolean(
      state.itemList.wishlist.products.find((product) => product.id === id)
    )
  );

  const isItemInCart = useAppSelector((state) =>
    Boolean(state.itemList.cart.products.find((product) => product.id === id))
  );

  useEffect(() => {
    setLocalWishlistItem(isItemInWishlist);
    setLocalCartItem(isItemInCart);
  }, [id, dispatch, isItemInWishlist, isItemInCart]);

  return {
    isInWishlist: localWishlistItem,
    isInCart: localCartItem,
  };
}
