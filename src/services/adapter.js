export default class Adapter {
  getChar = ({ url, name, gender, born, died, culture }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      gender,
      born,
      died,
      culture,
    }
  }

  getHouse = ({
    url,
    name,
    region,
    words,
    titles,
    overlord,
    ancestralWeapons,
  }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      region,
      words,
      titles,
      overlord,
      ancestralWeapons,
    }
  }

  getBook = ({ url, name, numberOfPages, publisher, released }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      numberOfPages,
      publisher,
      released,
    }
  }
}
