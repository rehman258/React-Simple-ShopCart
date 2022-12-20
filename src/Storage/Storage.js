class Storage{

    _getStorage(){
        return JSON.parse(localStorage.getItem('products'));
    }

    _addStorage(product){
        // console.log(JSON.parse(localStorage.getItem('products')))
        if(JSON.parse(localStorage.getItem('products'))){
            // localStorage.setItem('products',JSON.stringify(product))
            let tempStorage = JSON.parse(localStorage.getItem('products'));
            localStorage.setItem('products',JSON.stringify([...tempStorage,product]))
            // console.log([...tempStorage,product])
        }else{
            localStorage.setItem('products',JSON.stringify([product]))
        }
        
    }
    _removeFromStore(id){
        if(JSON.parse(localStorage.getItem('products'))){
            // localStorage.setItem('products',JSON.stringify(product))
            let tempStorage = JSON.parse(localStorage.getItem('products'));
            let filteredStorage = tempStorage.filter(item=>item.id!==id)
            localStorage.setItem('products',JSON.stringify([...filteredStorage]))
            // console.log([...tempStorage,product])
        }
    }


    _clearStorage(){
        localStorage.clear();
    }
    
}


export default  new Storage();