export default class Adapter {
  static getChar({ url, name, gender, born, died, culture }) {
    return {
      id: url.match(/\d+$/),
      name,
      gender,
      born,
      died,
      culture,
    }
  }

  static getHouse({
    url,
    name,
    region,
    words,
    titles,
    overlord,
    ancestralWeapons,
  }) {
    return {
      id: url.match(/\d+$/),
      name,
      region,
      words,
      titles,
      overlord,
      ancestralWeapons,
    }
  }

  static getBook({ url, name, numberOfPages, publisher, released }) {
    return {
      id: url.match(/\d+$/),
      name,
      numberOfPages,
      publisher,
      released,
    }
  }
}
