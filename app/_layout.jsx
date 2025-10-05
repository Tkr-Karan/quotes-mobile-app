import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false, // Auth group mein header hide
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="quote-details/[id]"
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
        />
      </Stack>
    </ToastProvider>
  );
};

export default RootLayout;
