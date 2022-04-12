import React, { useEffect, useMemo, useState } from 'react'
import Title from '../UI/Title/View'
import { FlatList } from 'react-native'
import Coffee from '../Coffee'

const CoffeeListView = () => {
  const [cafes, setCafes] = useState([])

  const loadCafes = useMemo(() => {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        const resCafes = require('./../../cafes.json')
        resolve(resCafes.recipes)
      }, 500)
    })
  }, [])

  useEffect(() => {
    loadCafes.then(resCafes => setCafes(resCafes))
  }, [loadCafes])

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
