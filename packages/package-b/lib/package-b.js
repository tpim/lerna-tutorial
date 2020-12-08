'use strict';
const packageA = require('@lion/package-a');

function packageB() {
    console.log("in packge b");

    packageA()
}
packageB()