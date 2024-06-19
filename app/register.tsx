import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ShadowButton from "@/components/ShadowButton";

const register = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.heading}>Register</Text>
      </View>
      <View style={{ width: "100%", gap: 10 }}>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
            secureTextEntry={true}
          />
        </View>
        <View style={{ width: "100%" }}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            placeholderTextColor={Colors.primaryColor}
            secureTextEntry={true}
          />
        </View>
      </View>
      <ShadowButton label="Register" onPress={() => {}} />
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
    color: Colors.primaryColor,
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
