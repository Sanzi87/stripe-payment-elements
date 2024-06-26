'use client';

import { useState } from 'react';
import { useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [ErrorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <form>
      <button>Pay now</button>
    </form>
  );
};

export default CheckoutPage;
