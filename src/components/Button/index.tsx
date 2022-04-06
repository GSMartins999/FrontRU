
  
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import styles from "./styles";

export default function Button({ onPress, title, type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        type == "green"
          ? styles.buttonGreen
          : type == "orange"
          ? styles.buttonOrange
          : styles.buttonPurple
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}