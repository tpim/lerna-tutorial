'use strict';
const packageA = require('@lion/package-a');

function packageB() {
    packageA()
}
packageB()