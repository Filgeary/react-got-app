export default class Adapter {
  static getChar({ name, gender, born, died, culture }) {
    return {
      name,
      gender,
      born,
      died,
      culture,
    }
  }

  static getHouse({ name, region, words, titles, overlord, ancestralWeapons }) {
    return {
      name,
      region,
      words,
      titles,
      overlord,
      ancestralWeapons,
    }
  }

  static getBook({ name, numberOfPages, publisher, released }) {
    return {
      name,
      numberOfPages,
      publisher,
      released,
    }
  }
}
