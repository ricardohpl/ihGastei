import React from 'react'
import { Card, Title, useTheme } from 'react-native-paper';


const Bar = () => {
  const { barText, bar } = useTheme()

  return (
    <Card style={bar}>
      <Title style={barText}>Ih Gastei!</Title>
    </Card>
  )
}

export default Bar