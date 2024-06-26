'use client';

import { Box, Heading } from '@radix-ui/themes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './components/Checkout_Page';
import convertToSubcurrency from './lib/convertToSubcurrency';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
  const amount = 99;

  return (
    <main className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
      <Box className='mb-10'>
        <Heading as='h1' className='text-4xl font-extrabold mb-2'>
          User
        </Heading>
        <Heading as='h2' className='text-2xl'>
          has requested<span className='font-bold'> {amount} kr</span>
        </Heading>
      </Box>

      <Elements
        stripe={stripePromise}
        options={{
          mode: 'payment',
          amount: convertToSubcurrency(amount),
          currency: 'sek',
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
