import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const skills = ["React Native", "TypeScript", "UI Design"];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>ABOUT THIS PROJECT</Text>
      <Text style={styles.title}>A simple profile, redesigned.</Text>
      <Text style={styles.subtitle}>
        A clean React Native profile interface with a personal dashboard,
        interactive points, and a custom visual style.
      </Text>

      <View style={styles.card}>
        <View style={styles.iconBox}>
          <Ionicons name="code-slash" size={22} color="#ef4444" />
        </View>
        <View style={styles.cardCopy}>
          <Text style={styles.cardTitle}>Built with Expo</Text>
          <Text style={styles.cardText}>
            This project uses Expo Router and React Native for Android, iOS,
            and web development.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Skills</Text>
      <View style={styles.skills}>
        {skills.map((skill) => (
          <View key={skill} style={styles.skill}>
            <Ionicons name="checkmark-circle" size={17} color="#22c55e" />
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      <View style={styles.note}>
        <Ionicons name="information-circle-outline" size={22} color="#64748b" />
        <Text style={styles.noteText}>
          Replace the profile name and email in src/app/index.tsx before
          submitting the project.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  content: {
    padding: 22,
    paddingBottom: 40,
  },
  kicker: {
    color: "#ef4444",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 12,
    marginBottom: 8,
  },
  title: {
    color: "#0f172a",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },
  subtitle: {
    color: "#64748b",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    shadowColor: "#0f172a",
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
    alignItems: "center",
  },
  cardCopy: {
    flex: 1,
    marginLeft: 13,
  },
  cardTitle: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 5,
  },
  cardText: {
    color: "#64748b",
    fontSize: 13,
    lineHeight: 19,
  },
  sectionTitle: {
    color: "#0f172a",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 28,
    marginBottom: 12,
  },
  skills: {
    gap: 10,
  },
  skill: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  skillText: {
    color: "#334155",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 9,
  },
  note: {
    marginTop: 22,
    padding: 15,
    borderRadius: 16,
    backgroundColor: "#e2e8f0",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  noteText: {
    flex: 1,
    color: "#475569",
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 10,
  },
});
