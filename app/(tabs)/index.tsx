import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import foodImg from '@/assets/images/food.jpg'; 
import Header from '@/components/Header';

const CATEGORIES = [
  { id: '1', name: 'Burger', icon: 'fast-food' },
  { id: '2', name: 'Pizza', icon: 'pizza' },
  { id: '3', name: 'Dessert', icon: 'ice-cream' },
  { id: '4', name: 'Sushi', icon: 'fish' },
  { id: '5', name: 'Drinks', icon: 'water' },
];

const FEATURED_RESTAURANTS = [
  {
    id: '1',
    name: 'McDonald\'s',
    rating: '4.5',
    deliveryTime: '10-15 mins',
    deliveryFee: 'Free',
    image: foodImg,
  },
  {
    id: '2',
    name: 'Starbucks',
    rating: '4.7',
    deliveryTime: '5-10 mins',
    deliveryFee: '$1.99',
    image: foodImg,
  },
  {
    id: '3',
    name: 'Domino\'s Pizza',
    rating: '4.3',
    deliveryTime: '20-30 mins',
    deliveryFee: 'Free',
    image: foodImg,
  },
  {
    id: '4',
    name: 'Pizza Hut',
    rating: '4.3',
    deliveryTime: '20-30 mins',
    deliveryFee: 'Free',
    image: foodImg,
  },
  {
    id: '5',
    name: 'SubWay',
    rating: '4.3',
    deliveryTime: '20-30 mins',
    deliveryFee: 'Free',
    image: foodImg,
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('1');

  const renderCategory = ({ item }: { item: typeof CATEGORIES[0] }) => {
    const isActive = activeCategory === item.id;
    return (
      <TouchableOpacity 
        style={[styles.categoryCard, isActive && styles.categoryCardActive]}
        onPress={() => setActiveCategory(item.id)}
        activeOpacity={0.8}
      >
        <View style={[styles.categoryIconContainer, isActive ? styles.categoryIconContainerActive : styles.categoryIconContainerInactive]}>
          <Ionicons name={item.icon as any} size={24} color={isActive ? '#FFFFFF' : '#999999'} />
        </View>
        <Text style={[styles.categoryName, isActive && styles.categoryNameActive]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}

      <Header />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What would you like</Text>
          <Text style={styles.title}>to order</Text>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={20} color="#999999" style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput}
              placeholder="Find for food or restaurant..."
              placeholderTextColor="#999999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={24} color="#FE724C" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            data={CATEGORIES}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Featured Restaurants */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Restaurants</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.restaurantsList}>
            {FEATURED_RESTAURANTS.map((restaurant) => (
              <TouchableOpacity key={restaurant.id} style={styles.restaurantCard} activeOpacity={0.9}>
                <Image source={restaurant.image} style={styles.restaurantImage} />
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>{restaurant.rating}</Text>
                  <Ionicons name="star" size={12} color="#FFC529" style={{ marginLeft: 2 }} />
                </View>
                
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <View style={styles.restaurantMeta}>
                    <View style={styles.metaItem}>
                      <Ionicons name="bicycle-outline" size={16} color="#999999" />
                      <Text style={styles.metaText}>{restaurant.deliveryFee}</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Ionicons name="time-outline" size={16} color="#999999" />
                      <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  deliverTo: {
    fontSize: 12,
    color: '#999999',
    marginBottom: 4,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  profileAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F8',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#333333',
    lineHeight: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 30,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F8',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333333',
  },
  filterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  seeAllText: {
    fontSize: 14,
    color: '#FE724C',
    fontWeight: '500',
  },
  categoriesList: {
    paddingHorizontal: 20,
    gap: 15,
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    padding: 6,
    paddingBottom: 15,
    width: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryCardActive: {
    backgroundColor: '#FE724C',
    shadowColor: '#FE724C',
    shadowOpacity: 0.3,
  },
  categoryIconContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryIconContainerActive: {
    backgroundColor: '#FFFFFF33', // Semi-transparent white
  },
  categoryIconContainerInactive: {
    backgroundColor: '#F5F5F8',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999999',
  },
  categoryNameActive: {
    color: '#FFFFFF',
  },
  restaurantsList: {
    paddingHorizontal: 20,
    gap: 20,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
    overflow: 'hidden',
  },
  restaurantImage: {
    width: '100%',
    height: 180,
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FE724C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FE724C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
  },
  ratingBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#333333',
  },
  restaurantInfo: {
    padding: 15,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 10,
  },
  restaurantMeta: {
    flexDirection: 'row',
    gap: 15,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontSize: 14,
    color: '#777777',
  },
});
