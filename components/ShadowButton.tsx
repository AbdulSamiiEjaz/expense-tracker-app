import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  onPress?: () => void;
  label: string;
}

const ShadowButton = ({ onPress, label }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.shadowButton}>
      <Text style={{ color: "white" }}>{label}</Text>
    </Pressable>
  );
};

export default ShadowButton;

const styles = StyleSheet.create({
  shadowButton: {
    backgroundColor: Colors.primaryColor,
    color: "white",
    paddingVertical: 15,
    borderRadius: 40,
    borderCurve: "continuous",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
