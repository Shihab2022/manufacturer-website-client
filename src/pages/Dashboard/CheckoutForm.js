import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { cost, name, email ,_id} = order;
// console.log(_id)
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ cost }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [cost]);

  if(processing){
      return <Loading></Loading>
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

    setSuccess("");
    setProcessing(true)
    ///confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError.message);
      setProcessing(false)
    }
    
    else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats ! Your payment is complete .");

////if success then data send to data base
const payment={
    orderId:_id,
    transactionId : paymentIntent.id
}

fetch(`http://localhost:5000/order/${_id}`,{
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(payment),
  })
.then(res=>res.json())
.then(data=>{
    if(data.acknowledged){
        toast.success('Your payment is successfully !!.')
    }
    else{
        toast.error('something wrong please try again !!')
    }
    setProcessing(false)
})


    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-5"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-5">{cardError}</p>}
      {success && (
        <div>
          <p className="text-amber-500 mt-5">{success}</p>
          <p>
            Your Transaction Id :{" "}
            <span className="text-amber-700 font-semibold mt-2">
              {transactionId}
            </span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
