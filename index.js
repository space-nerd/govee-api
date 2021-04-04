const govee = require('govee-api');

govee.initDevice("8a17da1f-c1e9-4a1d-8295-6b1360595bb6", "7c:a6:b0:13:b8:e9", "H6003");

govee.control.setOn(true);