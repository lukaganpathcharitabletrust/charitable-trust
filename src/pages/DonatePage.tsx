// import React, { useState } from 'react';
// import { CheckCircle, DollarSign, CreditCard, Calendar, Lock } from 'lucide-react';
// import Button from '../components/ui/Button';

// interface DonationOption {
//   value: number;
//   label: string;
// }

// const donationOptions: DonationOption[] = [
//   { value: 25, label: '$25' },
//   { value: 50, label: '$50' },
//   { value: 100, label: '$100' },
//   { value: 250, label: '$250' },
//   { value: 500, label: '$500' },
//   { value: 0, label: 'Custom' },
// ];

// const DonatePage: React.FC = () => {
//   const [donationAmount, setDonationAmount] = useState(50);
//   const [customAmount, setCustomAmount] = useState('');
//   const [isRecurring, setIsRecurring] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [cardholderName, setCardholderName] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleDonationChange = (amount: number) => {
//     setDonationAmount(amount);
//     if (amount > 0) {
//       setCustomAmount('');
//     }
//   };

//   const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setCustomAmount(value);
//     setDonationAmount(0);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In a real app, this would process the payment
//     setIsSubmitted(true);
//   };

//   const finalAmount = donationAmount > 0 ? donationAmount : parseFloat(customAmount) || 0;

//   if (isSubmitted) {
//     return (
//       <div className="flex flex-col w-full">
//         <section className="py-16 md:py-24 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-10">
//               <div className="text-center mb-8">
//                 <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                   <CheckCircle className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
//                   Thank You for Your Donation!
//                 </h1>
//                 <p className="text-lg text-gray-600">
//                   Your generous contribution of ${finalAmount.toFixed(2)} {isRecurring ? 'monthly' : ''} will help us make a difference.
//                 </p>
//               </div>

//               <div className="bg-gray-50 rounded-lg p-6 mb-8">
//                 <h3 className="text-lg font-bold mb-4 text-gray-900">Donation Details</h3>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Amount:</span>
//                     <span className="font-medium">${finalAmount.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Frequency:</span>
//                     <span className="font-medium">{isRecurring ? 'Monthly' : 'One-time'}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Email:</span>
//                     <span className="font-medium">{email}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Transaction ID:</span>
//                     <span className="font-medium">DON-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-gray-600 text-center mb-8">
//                 <p>A confirmation receipt has been sent to your email address.</p>
//               </div>

//               <div className="space-y-4">
//                 <Button onClick={() => window.location.href = '/'} fullWidth>
//                   Return to Homepage
//                 </Button>
//                 <Button variant="outline" onClick={() => {
//                   setIsSubmitted(false);
//                   setCurrentStep(1);
//                 }} fullWidth>
//                   Make Another Donation
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col w-full">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1600"
//             alt="Children in a classroom"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         </div>

//         <div className="relative z-10 container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Make a Difference Today</h1>
//           <p className="text-xl text-gray-200 max-w-3xl mx-auto">
//             Your donation will help us continue our mission of creating positive change in communities worldwide.
//           </p>
//         </div>
//       </section>

//       {/* Donation Form Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="md:flex">
//                 <div className="md:w-2/5 bg-teal-600 text-white p-8 flex flex-col items-center justify-center text-center">
//                   <h2 className="text-2xl font-bold mb-4">Scan & Donate</h2>
//                   <img
//                     src="\resources\QR1.png"
//                     alt="QR Code for Donation"
//                     className="w-56 h-56 mb-6 border border-white rounded-lg bg-white"
//                   />
//                   <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
//                   <p className="text-sm leading-relaxed">
//                     <strong>Bank Name:</strong> Union Bank of India<br />
//                     <strong>Account Name:</strong> Kai Luka Ganpatsheth Badgujar charitable trust<br />
//                     <strong>Account Number:</strong> 013221010000211<br />
//                     <strong>IFSC:</strong> UBIN0901326<br />
//                   </p>
//                   <div className="pt-6 border-t border-teal-500">

//                     <p className="font-medium">
//                       Your donations are tax-deductible under ATG 80G.
//                     </p>
//                   </div>
//                 </div>


//                 {/* <div className="md:w-3/5 p-8">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     {currentStep === 1 ? 'Choose Your Donation' : 'Payment Information'}
//                   </h2>

         
//                   <div className="flex items-center mb-8">
//                     <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === 1 ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-600'
//                       } font-bold text-sm`}>
//                       1
//                     </div>
//                     <div className={`flex-1 h-1 mx-2 ${currentStep === 2 ? 'bg-teal-600' : 'bg-gray-200'
//                       }`}></div>
//                     <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep === 2 ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400'
//                       } font-bold text-sm`}>
//                       2
//                     </div>
//                   </div>

//                   {currentStep === 1 ? (
//                     <form onSubmit={(e) => { e.preventDefault(); setCurrentStep(2); }}>
//                       <div className="mb-6">
//                         <label className="block text-gray-700 font-medium mb-3">
//                           Select Amount
//                         </label>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                           {donationOptions.map((option) => (
//                             <button
//                               key={option.value}
//                               type="button"
//                               className={`py-3 rounded-md border ${option.value === donationAmount
//                                   ? 'border-teal-600 bg-teal-50 text-teal-600'
//                                   : 'border-gray-300 hover:border-teal-400'
//                                 }`}
//                               onClick={() => handleDonationChange(option.value)}
//                             >
//                               {option.label}
//                             </button>
//                           ))}
//                         </div>
//                       </div>

//                       {donationAmount === 0 && (
//                         <div className="mb-6">
//                           <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">
//                             Enter Custom Amount
//                           </label>
//                           <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <DollarSign className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input
//                               type="text"
//                               id="customAmount"
//                               value={customAmount}
//                               onChange={handleCustomAmountChange}
//                               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                               placeholder="Enter amount"
//                               required={donationAmount === 0}
//                             />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-6">
//                         <label className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={isRecurring}
//                             onChange={(e) => setIsRecurring(e.target.checked)}
//                             className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 h-5 w-5"
//                           />
//                           <span className="ml-2 text-gray-700">Make this a monthly donation</span>
//                         </label>
//                       </div>

//                       <div className="mb-6">
//                         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                           placeholder="Your email"
//                           required
//                         />
//                         <p className="mt-1 text-sm text-gray-500">
//                           We'll send the receipt to this email
//                         </p>
//                       </div>

//                       <Button type="submit" fullWidth size="lg">
//                         Continue to Payment
//                       </Button>
//                     </form>
//                   ) : (
//                     <form onSubmit={handleSubmit}>
//                       <div className="bg-gray-50 rounded-lg p-4 mb-6">
//                         <div className="flex justify-between items-center">
//                           <span className="text-gray-700">Donation Amount:</span>
//                           <span className="font-bold text-lg text-gray-900">
//                             ${finalAmount.toFixed(2)} {isRecurring && '/ month'}
//                           </span>
//                         </div>
//                       </div>

//                       <div className="mb-4">
//                         <label htmlFor="cardholderName" className="block text-gray-700 font-medium mb-2">
//                           Cardholder Name
//                         </label>
//                         <input
//                           type="text"
//                           id="cardholderName"
//                           value={cardholderName}
//                           onChange={(e) => setCardholderName(e.target.value)}
//                           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                           placeholder="Name on card"
//                           required
//                         />
//                       </div>

//                       <div className="mb-4">
//                         <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">
//                           Card Number
//                         </label>
//                         <div className="relative">
//                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <CreditCard className="h-5 w-5 text-gray-400" />
//                           </div>
//                           <input
//                             type="text"
//                             id="cardNumber"
//                             value={cardNumber}
//                             onChange={(e) => setCardNumber(e.target.value)}
//                             className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                             placeholder="1234 5678 9012 3456"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 mb-6">
//                         <div>
//                           <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">
//                             Expiry Date
//                           </label>
//                           <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <Calendar className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input
//                               type="text"
//                               id="expiryDate"
//                               value={expiryDate}
//                               onChange={(e) => setExpiryDate(e.target.value)}
//                               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                               placeholder="MM / YY"
//                               required
//                             />
//                           </div>
//                         </div>
//                         <div>
//                           <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
//                             CVV
//                           </label>
//                           <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <Lock className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input
//                               type="text"
//                               id="cvv"
//                               value={cvv}
//                               onChange={(e) => setCvv(e.target.value)}
//                               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
//                               placeholder="123"
//                               required
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex space-x-4">
//                         <Button
//                           type="button"
//                           variant="outline"
//                           fullWidth
//                           onClick={() => setCurrentStep(1)}
//                         >
//                           Back
//                         </Button>
//                         <Button type="submit" fullWidth>
//                           Complete Donation
//                         </Button>
//                       </div>

//                       <p className="mt-4 text-sm text-gray-500 text-center">
//                         Your payment information is secure and encrypted.
//                       </p>
//                     </form>
//                   )}
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DonatePage;
//This was the initial code for reference 

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const DonatePage: React.FC = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // if (isSubmitted) {
  //   return (
  //     <div className="flex flex-col w-full">
  //       <section className="py-16 md:py-24 bg-gray-50">
  //         <div className="container mx-auto px-4">
  //           <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-10">
  //             <div className="text-center mb-8">
  //               <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
  //                 <CheckCircle className="w-8 h-8 text-green-600" />
  //               </div>
  //               <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
  //                 Thank You for Your Donation!
  //               </h1>
  //               <p className="text-lg text-gray-600">
  //                 Your generous contribution helps us make a difference.
  //               </p>
  //             </div>

  //             <div className="text-gray-600 text-center mb-8">
  //               <p>A confirmation receipt has been sent to your email address.</p>
  //             </div>

  //             <div className="space-y-4">
  //               <Button onClick={() => window.location.href = '/'} fullWidth>
  //                 Return to Homepage
  //               </Button>
  //               <Button
  //                 variant="outline"
  //                 onClick={() => setIsSubmitted(false)}
  //                 fullWidth
  //               >
  //                 Make Another Donation
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Children in a classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your donation will help us continue our mission of creating positive change in communities.
          </p>
        </div>
      </section>

      {/* Donation QR Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full bg-teal-600 text-white p-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold mb-4">Scan & Donate</h2>
                <img
                  src="/resources/QR1.png"
                  alt="QR Code for Donation"
                  className="w-56 h-56 mb-6 border border-white rounded-lg bg-white"
                />
                <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
                <p className="text-sm leading-relaxed">
                  <strong>Bank Name:</strong> Union Bank of India<br />
                  <strong>Account Name:</strong> Kai Luka Ganpatsheth Badgujar charitable trust<br />
                  <strong>Account Number:</strong> 013221010000211<br />
                  <strong>IFSC:</strong> UBIN0901326<br />
                </p>

                <div className="pt-6 border-t border-teal-500 mt-4">
                  <p className="font-medium">
                    Your donations are tax-deductible under ATG 80G.
                  </p>
                  <div className="mt-3 border-t border-teal-400 pt-3">
                    <p className="text-sm font-medium">
                      <u>NOTE:</u> Once donations are completed, please email the transaction details to<br />
                      <span className="underline">lukaganpathcharitabletrust@gmail.com</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
