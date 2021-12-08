import MercadoPagoAdapter from "./Adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./Adapters/PayonnerAdapter";
import MercadoPago from "./MercadoPago/MercadoPago";
import IPayonnerPayment from "./Payonner/IPayonnerPayment";
import Payonner from "./Payonner/Payonner";
import IPayPalPayment from "./Paypal/IPayPalPayment";
import PayPal from "./Paypal/PayPal";

console.clear();

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();
// payment.sendPayment();
// payment.receivePayment();