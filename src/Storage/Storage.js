class Storage{

    _getStorage(){
        return JSON.parse(localStorage.getItem('products'));
    }

    _addStorage(products){
        localStorage.setItem('products',JSON.stringify(products));
    }

    _clearStorage(){
        localStorage.clear();
    }
    
}


export default  new Storage();