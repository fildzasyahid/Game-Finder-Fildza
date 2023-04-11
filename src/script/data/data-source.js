import clubs from './clubs.js';

// class DataGames {
//   static searchClub(keyword) {
//     return new Promise((resolve, reject) => {
//       const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//       if (filteredClubs.length) {
//         resolve(filteredClubs);
//       } else {
//         reject(`${keyword} is not found`);
//       }
//     });
//   }
// }

// export default DataGames;

class DataGames {
  static searchClub(keyword) {
    return fetch(`GET https://www.freetogame.com/api/games?t=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}
 
export default DataGames;