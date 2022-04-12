import React from 'react'
import Title from '../UI/Title/View'
import { FlatList } from 'react-native'
import Coffee from '../Coffee'
import { useSelector } from 'react-redux'

const CoffeeListView = () => {
  const cafes = useSelector(state => state)

  return (
    <>
      <FlatList
        data={cafes}
        renderItem={({ item }) => <Coffee cafe={item} discount={0.2} />}
        ListHeaderComponent={() => <Title text="Listado de cafés" />}
      />
    </>
  )
}

export default CoffeeListView
