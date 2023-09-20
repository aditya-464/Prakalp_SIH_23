import { HStack, Text } from '@chakra-ui/layout'
import styles from './footer.module.css'
import React from 'react'

export default function Footer() {
  return (
    <HStack minW={'500px'} py={'20px'} color={'white'} bg={'prakalp.5'} justifyContent={'center'}>
      <Text className={styles.footerText}>Copyright 2023 | All Rights Reserved | Smart India Hackathon 2023 | Made by Emerging_DEVS</Text>
    </HStack>
  )
}
