import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const orders = () => {
  return (
    <SafeAreaView>
        <Header/>
      <Text>orders</Text>
    </SafeAreaView>
  )
}

export default orders

const styles = StyleSheet.create({})