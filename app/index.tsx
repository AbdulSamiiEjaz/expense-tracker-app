import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";

const getStarted = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.contentContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>Spend Smarter</Text>
          <Text style={styles.heading}>Save More</Text>
        </View>
        <View>
          <Pressable
            onPress={() => {
              router.push("/register");
            }}
            style={styles.shadowButton}
          >
            <Text style={{ color: "white" }}>Get Started</Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: Colors.secondaryColor }}>
            Already Have Account?{" "}
            <Link href={"/login"} replace={false} asChild>
              <Text style={{ color: Colors.primaryColor }}>Log In</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default getStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  contentContainer: {
    // backgroundColor: "royalblue",
    width: "100%",
    gap: 20,
  },
  heading: {
    color: Colors.primaryColor,
    fontSize: 36,
    margin: 0,
    padding: 0,
    lineHeight: 38,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
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
