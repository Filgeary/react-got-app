import Adapter from './adapter'

export default class Api {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }

  async _getDataJSON(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  async getAllBooks() {
    const data = await this._getDataJSON(`/books/`)
    return data.map(Adapter.getBook)
  }

  async getBook(id) {
    const data = await this._getDataJSON(`/books/${id}/`)
    return Adapter.getBook(data)
  }

  async getAllCharacters(pageNumber = 10, pageSizeCount = 10) {
    const data = await this._getDataJSON(
      `/characters?page=${pageNumber}&pageSize=${pageSizeCount}`,
    )
    return data.map(Adapter.getChar)
  }

  async getCharacter(id) {
    const data = await this._getDataJSON(`/characters/${id}`)
    return Adapter.getChar(data)
  }

  async getAllHouses() {
    const data = await this._getDataJSON(`/houses/`)
    return data.map(Adapter.getHouse)
  }

  async getHouse(id) {
    const data = await this._getDataJSON(`/houses/${id}/`)
    return Adapter.getHouse(data)
  }
}
