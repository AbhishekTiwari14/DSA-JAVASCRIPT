class HashMap{
    constructor(size = 53){
        this.map = new Array(size);
    }
    hash(key){
        let sum = 0;
        let random_Prime = 31;
        for(let i=0; i< Math.min(100, key.length); i++){
            let value = key.charCodeAt(i) - 96;
            sum = ((sum*random_Prime) + value) % this.map.length;
        }
        return sum;
    }

    set(key, value){
        let index = this.hash(key);
        if(!this.map[index]){
            this.map[index] = [];
        }
        this.map[index].push([key, value]);
    }

    get(key){
        const index = this.hash(key);
        if(!this.map[index]) return ;
        for(let i=0; i<this.map[index].length; i++){
            if(this.map[index][i][0] === key) return this.map[index][i][1];
        }
    }

    keys(){
        const keysArr = [];
        for(let i=0; i<this.map.length; i++){
            if(this.map[i]){
                for(let j=0; j<this.map[i].length; j++){
                    if(!keysArr.includes(this.map[i][j][0])){
                        keysArr.push(this.map[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values(){
        let valArr = [];
        for(let i=0; i<this.map.length; i++){
            if(this.map[i]){
                for(let j=0; j<this.map[i].length; j++){
                    valArr.push(this.map[i][j][1]);
                }
            }
        }
        return valArr;
    }
}

const HM = new HashMap();
HM.set("aman",67);
HM.set("duplicate", 67);
HM.set("ramu",241);
HM.set("fafsa","NC");
HM.set("jnhs", "Redo");
HM.set("air",3624);
HM.set("ocmai",3247);
HM.set("lavmoa","hello");
console.log(HM.get("lavmoa")); //"hello"
console.log(HM.keys()); //['duplicate','lavmoa','fafsa','ocmai','aman','air','ramu','jnhs']
console.log(HM.values()); //[ 67, 'hello', 'NC', 3247, 3624, 241, 'Redo' ]
console.log(HM); 
