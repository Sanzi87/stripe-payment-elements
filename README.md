# Next.js Stripe Payment Elements Component

This project demonstrates integration of Stripe Payment Elements within a Next.js 14 application for handling payments.

## Getting Started

Prerequisites
Before running this project, ensure you have Node.js installed on your local development environment.

1. Clone the repository: git clone https://github.com/Sanzi87/stripe-payment-elements.git
2. Navigate into the project directory: cd stripe-payment-elements
3. Install dependencies:

npm install

# or

yarn install

# or

pnpm install

4. Rename the envlocal.txt file to .env.local and provide your Stripe credentials:
5. Running the Development Server

To start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

The application integrates Stripe Payment Elements to handle secure payment processing.
Click "Pay" to initiate the payment flow.
The application will redirect to a success page (/payment-success) upon successful payment confirmation.

It can be used and modified freely in any project.

Deployment
This project can be deployed to production using various deployment platforms compatible with Next.js applications.
