// import profile from './profile.js'
let profile = require('./profile.js')
// console.log(profile)
// let profiles = ['ikbalrpl','rizafahmi','yofri']
// profiles.map(user => {
//   return profile.get(user)
// })
profiles = process.argv.slice(2)

profiles.map(profile.get)

// profile.get('ikbalrpl')
// profile.get('rizafahmi')
// profile.get('yofri')

// let array = [1,2,3]
//
// let newArray = array.map(item => {
//   return item*2
// })
// console.log(newArray)
// function functionName(param) {
//   console.log('fungsi ini dipanggil ' + param)
// }
// // functionName('hallo')
//
// let namaFungsi = function(){
//   console.log('ini adalah fungsi tanpa nama')
// }
// // namaFungsi()
//
// let namaFungsi2 = () => {
//   console.log('ini adalah fungsi tanpa nama')
// }
// namaFungsi2()
