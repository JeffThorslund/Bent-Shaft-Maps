//finds a rapid object from link Id
//params: linkId of target rapid, river data object
//return: rapid object

const findRapidFromId = (linkId, allData) => {
  for (let rapid of allData.rapids) {
    if (linkId === rapid.id) {
      return rapid;
    }
  }
  return { name: "No rapid id matches that link id" };
};

export default findRapidFromId;
