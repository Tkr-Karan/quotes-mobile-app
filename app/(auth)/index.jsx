import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useToast } from "react-native-toast-notifications";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const toast = useToast();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  // Handle login
  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success toast
      toast.show("Login successful! 🎉", {
        type: "success",
        duration: 3000,
        placement: "top",
        animationType: "slide-in",
      });

      router.replace("/(tabs)");
    } catch (error) {
      toast.show("Login failed. Please try again.", {
        type: "danger",
        duration: 3000,
        placement: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Demo login for testing
  const handleDemoLogin = () => {
    setEmail("demo@example.com");
    setPassword("demo123");
    toast.show("Demo credentials filled!", {
      type: "normal",
      duration: 2000,
      placement: "top",
    });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Login",
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#333",
        }}
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={40}
                  color="#007AFF"
                />
              </View>
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Sign in to continue your journey
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Email Address <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder="Enter your email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (errors.email) {
                      setErrors({ ...errors, email: "" });
                    }
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  editable={!isLoading}
                />
              </View>
              {errors.email ? (
                <View style={styles.errorContainer}>
                  <Ionicons name="warning-outline" size={14} color="#FF3B30" />
                  <Text style={styles.errorText}>{errors.email}</Text>
                </View>
              ) : null}
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Password <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (errors.password) {
                      setErrors({ ...errors, password: "" });
                    }
                  }}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>
              {errors.password ? (
                <View style={styles.errorContainer}>
                  <Ionicons name="warning-outline" size={14} color="#FF3B30" />
                  <Text style={styles.errorText}>{errors.password}</Text>
                </View>
              ) : null}
            </View>

            {/* Forgot Password & Remember Me */}
            <View style={styles.rememberForgotContainer}>
              <TouchableOpacity style={styles.rememberMe}>
                <Ionicons name="square-outline" size={20} color="#666" />
                <Text style={styles.rememberMeText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={[
                styles.loginButton,
                isLoading && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <View style={styles.loadingContainer}>
                  {/* <Ionicons
                    name="refresh"
                    size={20}
                    color="#fff"
                    style={styles.spinner}
                  /> */}
                  <Text style={styles.loginButtonText}>Signing In...</Text>
                </View>
              ) : (
                <View style={styles.buttonContent}>
                  <Ionicons name="log-in-outline" size={20} color="#fff" />
                  <Text style={styles.loginButtonText}>Sign In</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Demo Login Button */}
            <TouchableOpacity
              style={styles.demoButton}
              onPress={handleDemoLogin}
              disabled={isLoading}
            >
              <Text style={styles.demoButtonText}>Try Demo Login</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-google" size={20} color="#DB4437" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-apple" size={20} color="#000" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialButton}>
                <Ionicons name="logo-facebook" size={20} color="#4267B2" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <Link href="/register" asChild>
                <TouchableOpacity disabled={isLoading}>
                  <Text style={styles.signupLink}>Create Account</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 48,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E1F0FF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  required: {
    color: "#FF3B30",
  },
  inputWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    zIndex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#e8e8e8",
    borderRadius: 12,
    padding: 16,
    paddingLeft: 48,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#333",
    fontWeight: "500",
  },
  inputError: {
    borderColor: "#FF3B30",
    backgroundColor: "#FFF5F5",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    padding: 4,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 6,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    fontWeight: "500",
  },
  rememberForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rememberMeText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  forgotPassword: {
    padding: 4,
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonDisabled: {
    backgroundColor: "#99C8FF",
    shadowOpacity: 0,
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  spinner: {
    transform: [{ rotate: "0deg" }],
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  demoButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#007AFF",
    marginBottom: 32,
    backgroundColor: "transparent",
  },
  demoButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e8e8e8",
  },
  dividerText: {
    marginHorizontal: 16,
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 32,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#e8e8e8",
    backgroundColor: "#fff",
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#666",
    fontSize: 16,
  },
  signupLink: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 4,
  },
});
