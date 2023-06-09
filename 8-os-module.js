const os = require('os');

const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(`system uptime is: ${uptime} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);