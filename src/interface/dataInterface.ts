import { Ionicons } from "@expo/vector-icons";

export interface ListServices {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
}
