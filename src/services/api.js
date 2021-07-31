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

  getAllBooks() {
    return this._getDataJSON(`/books/`)
  }

  getBook(id) {
    return this._getDataJSON(`/books/${id}/`)
  }

  getAllCharacters() {
    return this._getDataJSON(`/characters?page=5&pageSize=10`)
  }

  getCharacter(id) {
    return this._getDataJSON(`/characters/${id}`)
  }

  getAllHouses() {
    return this._getDataJSON(`/houses/`)
  }

  getHouse(id) {
    return this._getDataJSON(`/houses/${id}/`)
  }
}
