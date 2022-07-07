/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
const serverUrl = "https://hydurag5jeq8.usemoralis.com:2053/server";
const appId = "86zoYQf4yXe4xH8Jnz8e8irfUw0jODZ70SvnfaK6";
const masterKey = "n4rjwWGWwfwklCqkFAemhUrA4rJ1RflZLcJRqb1d";

await Moralis.start({ serverUrl, appId, masterKey });
