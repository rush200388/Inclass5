import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PROFILE_NAME = "Ravindu Rusith Sandeepa ";
const PROFILE_EMAIL = "trrspeiris@students.nsbm.ac.lk";

export default function Profile() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />

      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>PERSONAL PROFILE</Text>
          <Text style={styles.headerTitle}>Hello 👋</Text>
        </View>
        <View style={styles.headerIcon}>
          <Ionicons name="person-outline" size={22} color="#ffffff" />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.profileCard}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={54} color="#ef4444" />
            </View>
            <View style={styles.onlineDot}>
              <Ionicons name="checkmark" size={13} color="#ffffff" />
            </View>
          </View>

          <Text style={styles.name}>{PROFILE_NAME}</Text>
          <View style={styles.emailRow}>
            <Ionicons name="mail-outline" size={16} color="#64748b" />
            <Text style={styles.email}>{PROFILE_EMAIL}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stats}>
            <View style={styles.stat}>
              <View style={styles.statIcon}>
                <Ionicons name="star" size={18} color="#f59e0b" />
              </View>
              <Text style={styles.statValue}>{points}</Text>
              <Text style={styles.statLabel}>Points</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.stat}>
              <View style={styles.statIcon}>
                <Ionicons name="sparkles" size={18} color="#ef4444" />
              </View>
              <Text style={styles.statValue}>Active</Text>
              <Text style={styles.statLabel}>Status</Text>
            </View>
          </View>
        </View>

        <View style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Ionicons name="flash" size={20} color="#ffffff" />
          </View>
          <View style={styles.tipTextWrap}>
            <Text style={styles.tipTitle}>Build your score</Text>
            <Text style={styles.tipText}>
              Tap the button below to add a point to your profile.
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setPoints((current) => current + 1)}
        activeOpacity={0.85}
      >
        <Ionicons name="add" size={26} color="#ffffff" />
        <Text style={styles.addButtonText}>Add point</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 24,
    backgroundColor: "#111827",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyebrow: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "800",
  },
  headerIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#1f2937",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#374151",
  },
  body: {
    flex: 1,
    padding: 18,
  },
  profileCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 26,
    alignItems: "center",
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  avatarRing: {
    width: 116,
    height: 116,
    borderRadius: 58,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fecaca",
    marginBottom: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#fff7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  onlineDot: {
    position: "absolute",
    right: 0,
    bottom: 2,
    width: 29,
    height: 29,
    borderRadius: 15,
    backgroundColor: "#22c55e",
    borderWidth: 3,
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#0f172a",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 8,
    textAlign: "center",
  },
  emailRow: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },
  email: {
    color: "#64748b",
    fontSize: 14,
    marginLeft: 7,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e2e8f0",
    marginVertical: 24,
  },
  stats: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  statIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
  },
  statValue: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "800",
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 12,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 55,
    backgroundColor: "#e2e8f0",
  },
  tipCard: {
    marginTop: 16,
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  tipIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#ef4444",
    justifyContent: "center",
    alignItems: "center",
  },
  tipTextWrap: {
    flex: 1,
    marginLeft: 12,
  },
  tipTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 3,
  },
  tipText: {
    color: "#cbd5e1",
    fontSize: 12,
    lineHeight: 18,
  },
  addButton: {
    position: "absolute",
    right: 18,
    bottom: 18,
    height: 52,
    paddingHorizontal: 18,
    borderRadius: 17,
    backgroundColor: "#ef4444",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#ef4444",
    shadowOpacity: 0.28,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 7,
  },
});
