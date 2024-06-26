'use client';

import { useEffect, useState } from 'react';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import convertToSubcurrency from '../lib/convertToSubcurrency';

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [ErrorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  return (
    <form>
      <button>Pay now</button>
    </form>
  );
};

export default CheckoutPage;
