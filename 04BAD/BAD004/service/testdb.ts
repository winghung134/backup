import  {Knex} from "knex"
export class MemoService {
    constructor(private knex:Knex){}
    
    async getMemos(){
return await this.knex("memos").select("*")
    }
   async addMemo(a,b){

   }
} 