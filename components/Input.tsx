import { StyleSheet } from "react-native";
import React from "react";
import { Control, Controller, useController } from "react-hook-form";
import { TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

export interface Props {
  control: any;
  placeholder?: string;
  name: string;
  type?: "text" | "password";
}

const Input = ({ control, placeholder, name, type = "text" }: Props) => {
  const isPassword = type === "password";

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={Colors.primaryColor}
          style={styles.input}
          secureTextEntry={isPassword}
        />
      )}
      name={name}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
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
