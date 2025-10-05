import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ITEMS_DATA } from "../../static/static";

export default function QuoteDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Find the quote by ID
  const quote = ITEMS_DATA.find((item) => item.id === id);

  if (!quote) {
    return (
      <View style={styles.container}>
        <Text>Quote not found</Text>
      </View>
    );
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `"${quote.name}" - ${quote.author}`,
      });
    } catch (error) {
      Alert.alert("Error", "Failed to share quote");
    }
  };

  const handleSave = () => {
    Alert.alert("Saved", "Quote saved to favorites!");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: quote.image }}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
          style={styles.imageOverlay}
        />

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Category Badge */}
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{quote.category}</Text>
        </View>

        {/* Quote Text */}
        <Text style={styles.quoteText}>"{quote.name}"</Text>

        {/* Author */}
        <View style={styles.authorSection}>
          <View style={styles.authorLine} />
          <Text style={styles.authorText}>- {quote.author}</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>About this Quote</Text>
          <Text style={styles.descriptionText}>
            This inspiring quote by {quote.author} reminds us about the
            importance of {quote.category.toLowerCase()}. It has been shared by
            millions of people around the world and continues to motivate
            individuals in their personal and professional lives.
          </Text>
        </View>

        {/* Additional Info */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Quote Details</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Timeless</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="heart-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Inspirational</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="share-social-outline" size={20} color="#666" />
              <Text style={styles.infoText}>Highly Shared</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Ionicons name="bookmark-outline" size={20} color="#007AFF" />
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Ionicons name="share-outline" size={20} color="#fff" />
            <Text style={styles.shareButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: 300,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 20,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    marginBottom: 20,
  },
  categoryText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  quoteText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    lineHeight: 32,
    marginBottom: 20,
  },
  authorSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  authorLine: {
    width: 40,
    height: 2,
    backgroundColor: "#007AFF",
    marginRight: 12,
  },
  authorText: {
    color: "#666",
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "italic",
  },
  descriptionSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  infoSection: {
    marginBottom: 25,
  },
  infoGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoItem: {
    alignItems: "center",
    flex: 1,
  },
  infoText: {
    marginTop: 5,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 25,
    flex: 0.48,
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: "#007AFF",
    borderRadius: 25,
    flex: 0.48,
    justifyContent: "center",
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
