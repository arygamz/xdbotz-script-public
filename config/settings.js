const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62856762008398'] // no own
global.author = 'AryBotz' // nama author 
global.packname = 'Ary bot whatsapp' // nama pack sticker
global.namabot = 'ARY BOTZ' // nama bot mu
global.group = 'https://chat.whatsapp.com/DSaEESZ1IT0629QbCR7A6a' // grup mu
global.pic = 'https://telegra.ph/file/36211850fa46193ef96ad.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
