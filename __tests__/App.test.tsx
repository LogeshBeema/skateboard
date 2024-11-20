import 'react-native';
import React from 'react';
import App from '../App';
import { render, fireEvent, waitFor } from '@testing-library/react-native'; // Import necessary helpers
import { NavigationContainer } from '@react-navigation/native'; // To mock navigation container

describe('App navigation tests', () => {
  it('should navigate to Login screen when "Go to Login" button is pressed', async () => {
    // Render the App component
    const { getByTestId } = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>
    );

    // Check if the Home screen is rendered and the button exists
    const homeScreenText = getByTestId('homeScreenText');
    expect(homeScreenText).toBeTruthy();  // Ensure the Home screen title is rendered

    const loginButton = getByTestId('goToLoginButton');
    expect(loginButton).toBeTruthy();  // Ensure the "Go to Login" button is rendered

    // Simulate button press to navigate to the Login screen
    fireEvent.press(loginButton);

    // Wait for the Login screen to appear by checking for the "Login" text
    await waitFor(() => {
      const loginScreenText = getByTestId('loginScreenText');
      expect(loginScreenText).toBeTruthy();  // Ensure the Login screen text is visible
    });
  });
});
