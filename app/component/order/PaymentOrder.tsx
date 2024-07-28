import ErrorBoundary from "../ErrorBoundary";
import PaymentForm from "./PaymentForm";

export default function PaymentOrder(){

    return (
        <ErrorBoundary>
          <PaymentForm />
        </ErrorBoundary>
    );
}