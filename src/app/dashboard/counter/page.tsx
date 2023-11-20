import { CartCounter } from "@/shopping-cart";




export const metadata = {
    title: 'Shopping cart',
    description: 'Simple shopping cart'
}
export default function CounterPage() {


    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos carrito de compras</span>
            <CartCounter value={20} />
        </div>
    );
}