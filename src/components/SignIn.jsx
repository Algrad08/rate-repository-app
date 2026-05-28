import * as yup from "yup";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { useFormik } from "formik";

import Text from "./Text";
import theme from "../theme";

import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
    backgroundColor: theme.colors.white,
  },
  input: {
    height: theme.heightSizes.normal,
    borderRadius: theme.borderRadius.classic,
    borderColor: theme.colors.borderTextPrimary,
    borderWidth: theme.borderWidth.upper,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.medium,
  },
  button: {
    height: theme.heightSizes.normal,
    borderRadius: theme.borderRadius.classic,
    justifyContent: "center",
    alignItems: "center",
  },
  onError: {
    borderColor: theme.colors.error,
    borderWidth: theme.borderWidth.thick,
  },
  onErrorMarginText: {
    marginBottom: theme.spacing.medium,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      console.log("Sign in successful");
      formik.resetForm();
      navigate("/");
    } catch (error) {
      console.log("Sign in failed", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  const buttonStyle = ({ pressed }) => [
    {
      backgroundColor: pressed ? theme.colors.secondary : theme.colors.primary,
    },
    styles.button,
  ];

  const inputStyle = (field) => [
    styles.input,
    formik.touched[field] && formik.errors[field] ? styles.onError : null,
  ];

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        style={inputStyle("username")}
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color="error" style={styles.onErrorMarginText}>
          {formik.errors.username}
        </Text>
      )}
      <TextInput
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        style={inputStyle("password")}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="error" style={styles.onErrorMarginText}>
          {formik.errors.password}
        </Text>
      )}
      <Pressable style={buttonStyle} onPress={formik.handleSubmit}>
        <Text color="white" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
