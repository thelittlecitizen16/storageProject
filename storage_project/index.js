const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class InMemoryStorage {
    constructor() {
        this.storage = { "afek": [{ "value": "xxx" }], "lior": [{ "value": "dddd" }] };
    }

    create(collectionName, item) {
        if (!(collectionName in this.storage)) {
            item._id = uuidv4();
            let obj2 = {}
            obj2[collectionName]=[item]
            _.merge(this.storage, obj2);
        }
        else if (!this.storage[collectionName].some(i => _.isEqual(i,item))) {
            item._id = uuidv4();
            this.storage[collectionName].push(item);
        }

        return item;
    }

    getByName(collectionName) {
        let obj2 = {}
        obj2[collectionName]= this.storage[collectionName]
        return obj2;
    }
}


module.exports = {
    InMemoryStorage,
};