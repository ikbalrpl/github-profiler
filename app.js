// TODO: [x] Connect to GitHub api
let https = require('https')

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/ikbalrpl',
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}

let request = https.request(options, (result) => {
  console.log('Got response: ', result.statusCode)
})

request.end()

request.on('error', (e) =>{
  console.error(e)
})

// TODO: Read the data


// TODO: parse the data
// TODO: Print the data out

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
