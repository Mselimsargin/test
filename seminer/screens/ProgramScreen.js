import * as React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";

// Example program data
const programData = [
  {
    location: "Room 101",
    begin: "09:00",
    end: "10:30",
    title: "Opening Ceremony",
    seminar_name: "UICT Kıraat Seminar Başlangıcı",
    speaker: "Ahmet Yılmaz",
    pdf_link: "https://www.example.com/opening.pdf",
  },
  {
    location: "Room 102",
    begin: "10:45",
    end: "12:00",
    title: "Lecture",
    seminar_name: "Kıraat Teknikleri",
    speaker: "Fatma Demir",
    pdf_link: "",
  },
  {
    location: "Room 103",
    begin: "13:00",
    end: "14:30",
    title: "Workshop",
    seminar_name: "Pratik Kıraat Uygulamaları",
    speaker: "Mehmet Kaya",
    pdf_link: "https://www.example.com/workshop.pdf",
  },
  {
    location: "Room 103",
    begin: "13:00",
    end: "14:30",
    title: "Workshop",
    seminar_name: "Pratik Kıraat Uygulamaları",
    speaker: "Mehmet Kaya",
    pdf_link: "https://www.example.com/workshop.pdf",
  },
];

export default function ProgramScreen() {
  const handlePdfPress = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {programData.map((item, index) => (
        <View key={index} style={styles.detailsBox}>
          {/* Top Colored Bar */}
          <View style={styles.topBar}>
            <Text style={styles.timeText}>
              {item.begin} - {item.end}
            </Text>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>

          {/* Seminar Name */}
          <Text style={styles.seminarText}>Mevzu : {item.seminar_name}</Text>

          {/* Speaker */}
          {item.speaker ? <Text style={styles.speakerText}>Konuşmacı : {item.speaker}</Text> : null}

          {/* PDF Link */}
          {item.pdf_link ? (
            <TouchableOpacity
              onPress={() => handlePdfPress(item.pdf_link)}
              style={styles.pdfButton}
            >
              <Text style={styles.pdfText}>Sunumu Görüntüle</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  detailsBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: "center", // center everything horizontally
  },
  topBar: {
    backgroundColor: "#00103b",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center", // center text horizontally
  },
  timeText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
    textAlign: "center",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  seminarText: {
    fontSize: 15,
    color: "#333",
    padding: 12,
    paddingTop: 8,
    textAlign: "center",
  },
  speakerText: {
    fontSize: 13,
    color: "gray",
    paddingHorizontal: 12,
    marginBottom: 8,
    textAlign: "center",
  },
  pdfButton: {
    marginBottom: 12,
    backgroundColor: "#00103b",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: "center", // center the button
  },
  pdfText: {
    color: "#fff",
    fontSize: 13,
  },
});
