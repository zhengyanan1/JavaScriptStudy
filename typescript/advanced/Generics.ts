interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  
  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string, a:number) {
      return source.search(subString) !== -1;
  }