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
    coatOfArms,
    words,
    titles,
    ancestralWeapons,
  }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      region,
      coatOfArms,
      words,
      titles: titles.join('\n'),
      ancestralWeapons: ancestralWeapons.join('\n'),
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
