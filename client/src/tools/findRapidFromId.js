//finds a rapid object from link Id
//params: linkId of target rapid, river data object
//return: rapid object

const findRapidFromId = (linkId, allData) => {
  console.log(linkId, allData)
    for (let rapid of allData.rapids) {
      console.log(rapid)
      if (linkId == rapid.id) {
        return rapid;
      }
    }
    return {name: "No rapid id matches that link id"}
  };

  export default findRapidFromId