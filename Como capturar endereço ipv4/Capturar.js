const os = require("os");
const getIPV4 =
  os.networkInterfaces().Ethernet[os.networkInterfaces().Ethernet.length - 1]
    .address;