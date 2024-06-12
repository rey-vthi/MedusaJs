import type { WidgetConfig, ProductDetailsWidgetProps } from "@medusajs/admin";

const DiscountWidget = ({product, notify}: ProductDetailsWidgetProps) => {
    return (<div><h1>You will see more details about {product.title} here</h1>
    <button 
    className="bg-black rounded p-1 text-white"
    onClick={() => notify.success("success", "You clicked the button!")}
  >Click me</button></div>)
}

export default DiscountWidget;

export const config: WidgetConfig = {
    zone: ["product.details.before"]
}