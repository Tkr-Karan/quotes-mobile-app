import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Login",
          headerBackVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Sign Up",
          headerBackVisible: false,
          headerShown: false,
        }}
      />
    </Stack>
  );
}
