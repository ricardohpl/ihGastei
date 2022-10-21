import React from 'react'
import { ScrollView } from 'react-native'

type Props = { children: any }

const Layout = (props: Props) => {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {props.children}
      </ScrollView>
    </>
  )
}

export default Layout