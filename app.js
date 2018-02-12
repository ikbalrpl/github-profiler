// TODO: [x] Connect to GitHub api
let https = require('https')

const username = 'ikbalrpl'
const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/users/${username}`,
  method: 'GET',
  headers: {
    'user-agent': 'nodejs'
  }
}

// TODO: [x] Read the data
let request = https.request(options, (response) => {
  // console.log('Got response: ', result.statusCode)
  let body = ''
  response.on('data', (data) => {
    body = body + data
  })
  response.on('end', ()=>{

    // TODO: [x] parse the data
    // convert String to JSON (Javascript Object)
    let profile = JSON.parse(body)
    if (response.statusCode === 200){
      // console.log(profile.login + ' owns ' + profile.public_repos + ' repo(s) ')
      // TODO: [x] Print the data out
      console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s).`)
    }else{
      console.log(`Profile with username '${username}' not found.`)
    }
    // console.log(body)
    // console.log(typeof body)

  })

})

request.end()

request.on('error', (e) =>{
  console.error(e)
})


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
