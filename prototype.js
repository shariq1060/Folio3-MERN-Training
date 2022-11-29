const arr=[1,2,3,4,5]

//polyfill for find()

Array.prototype.find=null;
if(!Array.prototype.find){
Array.prototype.find = function(callback){
  for(let i=0; i<this.length; i++){
    const res = callback(this[i],i,this);
      if(res){
        return this[i];
      }
   }
   return undefined;
}
}

console.log(arr.find(element => element === 3))

//polyfill for findIndex()

Array.prototype.findIndex=null;
if(!Array.prototype.findIndex){
Array.prototype.findIndex = function(callback){
  for(let i=0; i<this.length; i++){
    const res = callback(this[i],i,this);
      if(res){
        return i;
      }
   }
   return -1;
}
}

console.log(arr.findIndex(element => element === 3))