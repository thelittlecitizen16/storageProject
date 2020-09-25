const _ =require('lodash');
const { v4: uuidv4 } = require('uuid');

class InMemoryStorage{
    storage ={};

    create(collectionName, item)
    {
        if(!(collectionName in storage))
        {
            item.set('_id', uuidv4());
            let obj2 = {collectionName : [item]}
            _.merge(storage, obj2);  
        }
        else if(collectionName.some(i => i === item))
        {
            let index =storage[collectionName].findIndex(item);
            storage[collectionName][index].set('_id', uuidv4());
        }
        else 
        {
            storage[collectionName].add(item);
        }

        return item;
    }

    find(collectionName, findFunc)
    {
       return storage[collectionName].find(findFunc);
    }

    where(collectionName, where)
    {
        let results =[];
        storage[collectionName].forEach(element => {

            if(_.isEqual(element,where))
            {
                results.push(element);
            }
        });
        
        return results;
    }

    where(collectionName)
    {
        return storage[collectionName];
    }


    remove(collectionName, findFunc)
    {
        let  resulte = storage[collectionName].find(findFunc);
        storage[collectionName].remove(findFunc);

        return resulte;
    }
}


const sharedStorage = {};

class InMemorySharedStorage{
    create(collectionName, item)
    {
        if(!(collectionName in sharedStorage))
        {
            item.set('_id', uuidv4());
            let obj2 = {collectionName : [item]}
            _.merge(sharedStorage, obj2);  
        }
        else if(collectionName.some(i => i === item))
        {
            let index =sharedStorage[collectionName].findIndex(item);
            sharedStorage[collectionName][index].set('_id', uuidv4());
        }
        else 
        {
            sharedStorage[collectionName].add(item);
        }

        return item;
    }

    find(collectionName, findFunc)
    {
       return sharedStorage[collectionName].find(findFunc);
    }

    where(collectionName, where)
    {
        let results =[];
        sharedStorage[collectionName].forEach(element => {

            if(_.isEqual(element,where))
            {
                results.push(element);
            }
        });
        
        return results;
    }

    where(collectionName)
    {
        return sharedStorage[collectionName];
    }


    remove(collectionName, findFunc)
    {
        let  resulte = sharedStorage[collectionName].find(findFunc);
        sharedStorage[collectionName].remove(findFunc);

        return resulte;
    }
}

nodule.exports = {
    InMemoryStorage,
    InMemorySharedStorage
};