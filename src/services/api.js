import Adapter from './adapter'

export default class Api {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }
  adapter = new Adapter()

  _getDataJSON = async url => {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllBooks = async () => {
    const data = await this._getDataJSON(`/books/`)
    return data.map(this.adapter.getBook)
  }

  getBook = async id => {
    const data = await this._getDataJSON(`/books/${id}/`)
    return this.adapter.getBook(data)
  }

  getAllCharacters = async (pageNumber = 55, pageSizeCount = 10) => {
    const data = await this._getDataJSON(
      `/characters?page=${pageNumber || 55}&pageSize=${pageSizeCount || 10}`,
    )
    return data.map(this.adapter.getChar)
  }

  getCharacter = async id => {
    const data = await this._getDataJSON(`/characters/${id}`)
    return this.adapter.getChar(data)
  }

  getAllHouses = async () => {
    const data = await this._getDataJSON(`/houses/`)
    return data.map(this.adapter.getHouse)
  }

  getHouse = async id => {
    const data = await this._getDataJSON(`/houses/${id}/`)
    return this.adapter.getHouse(data)
  }
}
