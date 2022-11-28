import AsyncStorage from '@react-native-async-storage/async-storage';
 
async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');
    
    if(response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}

async function getItems(){
  return AsyncStorage.getItem('items')
    .then(response => {
        if(response)
            return Promise.resolve(JSON.parse(response));
        else
            return Promise.resolve([]);
    })
}

async function deleteItem(id){
    let savedItems = await getItems();
    const index = await savedItems.findIndex(item => item.id === id);
    savedItems.splice(index, 1);
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}
 
module.exports = {
    saveItem,
    getItems,
    deleteItem
}