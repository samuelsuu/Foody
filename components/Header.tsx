import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import foodImg from '@/assets/images/food.jpg'
const Header = () => {
    return (
        <View>
            <View style={styles.header}>
                <View>
                    <Text style={styles.deliverTo}>Deliver to</Text>
                    <TouchableOpacity style={styles.locationSelector}>
                        <Text style={styles.locationText}>Lagos, Nigeria</Text>
                        <Ionicons name="chevron-down" size={16} color="#FE724C" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.profileAvatar}>
                    <Image source={foodImg} style={styles.avatarImage} />
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Header

const styles = StyleSheet.create({
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
})