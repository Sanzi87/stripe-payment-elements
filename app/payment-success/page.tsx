import { Box, Heading } from '@radix-ui/themes';

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <main className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500'>
      <Box className='mb-10'>
        <Heading as='h1' className='text-4xl font-extrabold mb-2'>
          Thank you!
        </Heading>
        <Heading as='h2' className='text-2xl'>
          You successfully sent
        </Heading>

        <Box className='bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold'>
          {amount} sek
        </Box>
      </Box>
    </main>
  );
}
