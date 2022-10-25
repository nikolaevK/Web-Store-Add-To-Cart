import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import toast from "react-hot-toast";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  function redirectFunc() {
    toast.loading("Loading checkout page");
    fetch("https://serene-sea-47865.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems,
        storeItems,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        toast.dismiss();
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {""}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          {cartItems.length > 0 ? (
            <Button onClick={redirectFunc} className="btn-dark">
              Proceed to Checkout
            </Button>
          ) : null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
