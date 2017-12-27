const common = {
  // 原生js操作方法
  // 检测是否有某class
  hasClass: function (ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
  },
  // 为指定的dom元素添加样式
  addClass: function (ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += '' + cls
  },
  // 删除指定dom元素的样式
  removeClass: function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
      ele.className = ele.className.replace(reg, '')
    }
  },
  // 如果存在(不存在)，就删除(添加)一个样式
  toggleClass: function (ele, cls) {
    if (this.hasClass(ele, cls)) {
      this.removeClass(ele, cls)
    } else {
      this.addClass(ele, cls)
    }
  } 
}

common.op_localStorage = function() {
    let storage = window.localStorage;
    let show = function(){
        console.log(storage);
    };
    let set = function(key, value){
        storage.setItem(key,value);
    };
    let setArray = function(array){
        let i;
        for (i in array) {
            storage.setItem(array[i].key,array[i].value)
        }
    };
    let get = function(key){
        return storage.getItem(key);     
    };
    let remove = function(key) {
        storage.removeItem(key);
    };
    let clear = function(){
        storage.clear();
    };
    let getStorage = function(){
        return storage
    }
    return {set,get,remove,setArray,show,getStorage,clear}
}


export default common
