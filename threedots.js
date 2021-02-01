const ages = [34, 37, 32, 33, 30, 39];
const ages2 = [33, 40, 50, 53,31];
const totalAges = ages.concat(ages2);

const totalAges2 = [...ages, ...ages2];
console.log(totalAges2);