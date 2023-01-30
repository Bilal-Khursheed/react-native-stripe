



  // const card = {
  //   number: '4242424242424242',
  //   exp_month: 12,
  //   exp_year: 2020,
  //   cvc: '123',
  // };

  // stripe.createToken(card)
  //   .then(({token}) => {
  //     // Send token.id to your server
  //   })
  //   .catch((error) => {
  //     // Handle error
  //   });
  // To integrate Stripe with an Expo React Native app, you will need to follow these steps:

  // Install the expo-stripe package, which provides an easy-to-use interface for Stripe's APIs in Expo React Native apps.

  // Get your Stripe API keys by creating an account on Stripe and navigating to the Developers > API keys section of the Stripe dashboard.

  // Import the Stripe object from the expo-stripe package and use it to create a Stripe instance with your API keys.

  // Create a form in your React Native component to collect credit card information from the user, including the card number, expiration date, and CVC.

  // Use the createTokenAsync method from the Stripe instance to create a token from the credit card information.

  // Send the token to your server, where you can use Stripe's APIs to create a subscription for the user.

  // Handle any errors that may occur during the payment process and display appropriate messages to the user.

  // Here is an example of how to create a Stripe token in an Expo React Native app
  // import { Stripe } from 'expo-stripe';

  // const stripe = new Stripe('pk_test_YOUR_PUBLISHABLE_KEY');

  // const card = {
  //   number: '4242424242424242',
  //   expMonth: 12,
  //   expYear: 2020,
  //   cvc: '123',
  // };

  // stripe
  //   .createTokenAsync(card)
  //   .then((response) => {
  //     // Send response.tokenId to your server
  //   })
  //   .catch((error) => {
  //     // Handle error
  //   });

  // To buy a subscription using Stripe on a React Native Expo app, you will need to follow these steps:

  // Install the expo-stripe package, which provides an easy-to-use interface for Stripe's APIs in Expo React Native apps.

  // Get your Stripe API keys by creating an account on Stripe and navigating to the Developers > API keys section of the Stripe dashboard.

  // Import the Stripe object from the expo-stripe package and use it to create a Stripe instance with your API keys.

  // Create a form in your React Native component to collect credit card information from the user, including the card number, expiration date, and CVC.

  // Use the createTokenAsync method from the Stripe instance to create a token from the credit card information.

  // Send the token to your server, where you can use Stripe's APIs to create a subscription for the user by making a POST request to the Stripe Subscription API endpoint with the token ID and the subscription plan details.

  // Handle any errors that may occur during the payment process and display appropriate messages to the user.

  // Here is an example of how to create a Stripe subscription in an Expo React Native app:

  // import { Stripe } from 'expo-stripe';

  // const stripe = new Stripe('pk_test_YOUR_PUBLISHABLE_KEY');

  // const card = {
  //   number: '4242424242424242',
  //   expMonth: 12,
  //   expYear: 2020,
  //   cvc: '123',
  // };

  // stripe
  //   .createTokenAsync(card)
  //   .then((response) => {
  //     // Send the token ID to your server
  //     return fetch('https://yourserver.com/create-subscription', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ token: response.tokenId, plan: 'YOUR_PLAN_ID' }),
  //     });
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Handle successful subscription creation
  //   })
  //   .catch((error) => {
  //     // Handle error
  //   });


  // import React, { useState } from 'react';
  // import { View, TextInput, TouchableOpacity, Text } from 'react-native';
  // import { Stripe } from 'expo-stripe';

  // const AddCardScreen = () => {
  //   const [cardNumber, setCardNumber] = useState('');
  //   const [expMonth, setExpMonth] = useState('');
  //   const [expYear, setExpYear] = useState('');
  //   const [cvc, setCvc] = useState('');
  //   const [error, setError] = useState(null);

  //   const stripe = new Stripe('pk_test_YOUR_PUBLISHABLE_KEY');

  //   const handleSubmit = () => {
  //     stripe
  //       .createTokenAsync({
  //         number: cardNumber,
  //         expMonth: expMonth,
  //         expYear: expYear,
  //         cvc: cvc,
  //       })
  //       .then((response) => {
  //         // Send the token ID to your server
  //         // handle success
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   };

  //   return (
  //     <View>
  //       <TextInput
  //         value={cardNumber}
  //         onChangeText={(text) => setCardNumber(text)}
  //         placeholder="Card Number"
  //       />
  //       <TextInput
  //         value={expMonth}
  //         onChangeText={(text) => setExpMonth(text)}
  //         placeholder="Expiration Month"
  //       />
  //       <TextInput
  //         value={expYear}
  //         onChangeText={(text) => setExpYear(text)}
  //         placeholder="Expiration Year"
  //       />
  //       <TextInput
  //         value={cvc}
  //         onChangeText={(text) => setCvc(text)}
  //         placeholder="CVC"
  //       />
  //       {error && <Text>{error}</Text>}
  //       <TouchableOpacity onPress={handleSubmit}>
  //         <Text>Add Card</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  // export default AddCardScreen;


