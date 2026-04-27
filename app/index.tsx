import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import img from "@/assets/images/food.jpg";

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} resizeMode="cover" />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Foody</Text>
        <Text style={styles.subtitle}>
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </Text>

        <View style={styles.authButtonsContainer}>
          <TouchableOpacity style={[styles.button, styles.loginButton]} activeOpacity={0.8} onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.registerButton]} activeOpacity={0.8} onPress={() => router.push('/(auth)/register')}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Or connect with</Text>
          <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
            <Ionicons name="logo-google" size={20} color="#DB4437" />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  image: {
    width: width * 0.75,
    height: width * 0.75,
    borderRadius: (width * 0.75) / 2,
    borderWidth: 8,
    borderColor: '#FFF0ED',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FE724C',
    marginBottom: 10,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  authButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
    gap: 15,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#FE724C',
    shadowColor: '#FE724C',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#FE724C',
  },
  registerButtonText: {
    color: '#FE724C',
    fontSize: 16,
    fontWeight: '700',
  },
  socialContainer: {
    width: '100%',
    alignItems: 'center',
  },
  orText: {
    color: '#999999',
    fontSize: 14,
    marginBottom: 20,
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F8',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    gap: 12,
  },
  googleButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
  },
});
