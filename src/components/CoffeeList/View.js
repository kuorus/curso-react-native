import React from 'react'
import Title from '../UI/Title/View'
import { FlatList } from 'react-native'
import Coffee from '../Coffee'

const CoffeeListView = props => {
  return (
    <>
      <FlatList
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          backgroundColor: '#fcfcfc',
          borderRadius: 15,
          borderTopRightRadius: 0,
          elevation: 5,
        }}
        stickyHeaderIndices={[0]}
        bounces={false}
        data={props.cafes}
        renderItem={({ item }) => <Coffee cafe={item} discount={0.2} />}
        ListHeaderComponent={() => (
          <Title style={{ padding: 10, borderTopLeftRadius: 15, backgroundColor: '#fcfcfc' }} text="☕ Coffee List" />
        )}
      />
    </>
  )
}

export default CoffeeListView
