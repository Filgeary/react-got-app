import React, { Component } from 'react'
import Api from '../../services/api'

// components
import ItemList from '../itemList/itemList'
import ItemDetails, { Field } from '../itemDetails/itemDetails'
import RowBlock from '../rowBlock/rowBlock'

class PageHouses extends Component {
  api = new Api()

  state = {
    houseId: '',
  }

  changeHouseIdHandler = id => {
    this.setState({ houseId: id })
  }

  render() {
    const itemListBlock = (
      <ItemList
        title="Pick a House"
        dataValue="allHouses"
        onItemSelected={this.changeHouseIdHandler}
        getData={this.api.getAllHouses}
      />
    )

    const itemDetailsBlock = (
      <ItemDetails
        title="Select a House in the left panel"
        dataValue="house"
        itemId={this.state.houseId}
        getData={this.api.getHouse}
      >
        <Field field="region" label="Region" />
        <Field field="coatOfArms" label="Coat&nbsp;Of&nbsp;Arms" />
        <Field field="words" label="Words" />
        <Field field="titles" label="Titles" />
        <Field field="ancestralWeapons" label="Ancestral Weapons" />
      </ItemDetails>
    )

    return <RowBlock left={itemListBlock} right={itemDetailsBlock} />
  }
}

export default PageHouses
