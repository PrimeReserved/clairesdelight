import ErrorBoundary from "@/app/component/ErrorBoundary";
import PaymentOrder from "@/app/component/order/PaymentOrder";

export default function Page(){

    return (
        <ErrorBoundary>
          <PaymentOrder />
        </ErrorBoundary>
    );
}