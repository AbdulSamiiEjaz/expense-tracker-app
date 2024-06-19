import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ShadowButton from "@/components/ShadowButton";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";

const register = () => {
  const method = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          height: "20%",
          width: "100%",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderCurve: "continuous",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Login</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <Input
            placeholder="Username / Email"
            control={method.control}
            name="identifier"
          />
        </View>
        <View style={{ width: "100%" }}>
          <Input
            placeholder="Password"
            control={method.control}
            name="password"
            type="password"
          />
        </View>
        <ShadowButton
          label="Login"
          onPress={() => method.handleSubmit(onSubmit)()}
        />
      </View>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    borderColor: Colors.primaryColor,
    color: Colors.primaryColor,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
  },
});
