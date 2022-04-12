import React from 'react'
import Title from '../UI/Title/View'
import { FlatList } from 'react-native'
import Coffee from '../Coffee'

const CoffeeListView = props => {
  return (
    <>
      <FlatList
        scrollEnabled={true}
        data={props.cafes}
        renderItem={({ item }) => <Coffee cafe={item} discount={0.2} />}
        ListHeaderComponent={() => <Title text="Listado de cafés" />}
      />
    </>
  )
}

export default CoffeeListView
