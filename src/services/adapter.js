export default class Adapter {
  getChar = ({ url, name, gender, culture, born, titles, aliases }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      gender,
      culture,
      born,
      titles: titles.join('\n'),
      aliases: aliases.join('\n'),
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

  getBook = ({ url, name, authors, numberOfPages, publisher, released }) => {
    return {
      id: url.match(/\d+$/)[0],
      name,
      authors: authors.join('\n'),
      numberOfPages,
      publisher,
      released: new Date(released).toLocaleDateString(),
    }
  }
}
