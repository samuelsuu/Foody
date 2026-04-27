import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'

const setting = () => {
  return (
    <SafeAreaView edges={['top']}>
      <Header />
      <Text>setting</Text>
    </SafeAreaView>
  )
}

export default setting

const styles = StyleSheet.create({})