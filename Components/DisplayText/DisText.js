import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import PageHeader from '../Home/Shared/PageHeader';

const ImageAnalyzeDisplay = ({ route }) => {
  const { imageUri } = route.params;
  const [labels, setLabels] = useState([]);
  const [analyzing, setAnalyzing] = useState(false);

  const analyzeImage = async () => {
    setAnalyzing(true); // Start analyzing
    try {
      const apiKey = process.env.REACT_APP_GOOGLE_VISION_API_KEY;
      const apiURL = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

      const base64ImageData = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const requestData = {
        requests: [
          {
            image: {
              content: base64ImageData,
            },
            features: [{ type: 'LABEL_DETECTION', maxResults: 10 }],
          },
        ],
      };

      const response = await axios.post(apiURL, requestData);
      setLabels(response.data.responses[0].labelAnnotations);
    } catch (error) {
      console.error('Error analyzing image: ', error);
      alert('Error analyzing image. Please try again later.');
    }
    setAnalyzing(false); // End analyzing
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        marginTop: 15,
        
      }}>
        <PageHeader title={'Image Detection'} />
      </View>
      <View style={{
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
      }}></View>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text>No image selected.</Text>
        )}
      </View>
      {!analyzing && (
        <TouchableOpacity onPress={analyzeImage} style={styles.analyzeButton}>
          <Text style={styles.analyzeButtonText}>Analyze Image</Text>
        </TouchableOpacity>
      )}
      {analyzing && <Text style={styles.analyzingText}>Analyzing...</Text>}
      <View style={styles.labelsContainer}>
        {labels.map((label, index) => (
          <Text key={index} style={styles.labelText}>
            {label.description} ({Math.round(label.score * 100)}%)
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  labelsContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  labelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
    marginBottom: 5,
  },
  analyzeButton: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 15,
    width: 150,
    borderRadius: 10,
  },
  analyzeButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  analyzingText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ImageAnalyzeDisplay;
