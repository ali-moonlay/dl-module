var options = {
    manager: require("../../../src/managers/master/quality-manager"),
    model: require("dl-models").master.Quality,
    util: require("../../data-util/master/quality-data-util"),
    validator: require("dl-models").validator.master.quality,
    createDuplicate: false,
    keys: []
};

var basicTest = require("../../basic-test-factory");
basicTest(options);
