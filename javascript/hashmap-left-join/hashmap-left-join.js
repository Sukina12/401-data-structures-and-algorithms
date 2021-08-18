
function leftJoin(hashMap1, hashMap2) {
  let resultArr = [];
  for (let i = 0; i < hashMap1.storage.length; i++) {
    if (hashMap1.storage[i]) {
      let key = [Object.keys(hashMap1.storage[i].head.value)[0]][0];
      let value = [Object.values(hashMap1.storage[i].head.value)[0]][0];
      resultArr.push([key, value]);
      console.log('hi', resultArr);
      if (hashMap1.storage[i].head.next) {
        let current = hashMap1.storage[i].head.next;
        while (current) {
          let key = Object.keys(current.value)[0];
          let value = Object.values(current.value)[0];
          resultArr.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j < resultArr.length; j++) {
    let leftHash = hashMap2.get(resultArr[j][0]);
    resultArr[j].push(leftHash);
  }
  if (resultArr.length === 0) {
    return null;
  } else return resultArr;

}

module.exports = leftJoin;
