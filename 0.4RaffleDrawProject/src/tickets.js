const Ticket=require('./Ticket');
const {readFile,writeFile}=require('./utils');

const tickets=Symbol('tickets');
class TicketCollection{
    constructor(){
        (async function(){
          this[tickets]=await readFile();//Data Read
        }.call(this))//call(this) না করলে this এর জন্য Error আসবে। কারণ Anonymus Function এর ভিতরে আরেকটা this আছে। 
    }
    
    /**
     * 
     * @param {string} username 
     * @param {number} price 
     * @return {Ticket}
     */
    create(username,price){
       const ticket=new Ticket(username,price);
       this[tickets].push(ticket);
       writeFile(this[tickets]);//Data Write
       return ticket;
    }


    
    /**
     * Create Bulk Ticket
     * @param {string} username 
     * @param {number} price 
     * @param {number} quantity 
     * @return {Ticket[]}
     */
    createBulk(username,price,quantity){
       let result=[];
       for(let i=0;i<quantity;i++){
           let cTicket=this.create(username,price);
           result.push(cTicket);
       }
       console.log(result);
       writeFile(this[tickets]);//Data Write
       return result;
    }


    /**
     * return all tickets from db
     */
    find(){
        return this[tickets];
    }
    
    /**
     * 
     * @param {string} id 
     * @return {Ticket}
     */
    findById(id){
        const ticket=this[tickets].find(
            /**
             * @param {Ticket} ticket
             */
            (ticket)=>ticket.id==id
        );
        return ticket;
    }
    
    /**
     * 
     * @param {string} username 
     * @return {Ticket}
     */
    findByUserName(username){
        const findTickets=this[tickets].filter(
            /**
             * @param {Ticket} ticket
             */
            (ticket)=>ticket.username==username
        );
        return findTickets;
    }


    /**
     * 
     * @param {string} ticketId 
     * @param {{username:string,price:number}} ticketBody 
     * @return {Ticket}
     */
    updateById(ticketId,ticketBody){
       const ticket=this.findById(ticketId);
       if(ticket){
        ticket.username=ticketBody.username??ticket.username
        ticket.price=ticketBody.price??ticket.price
       }
       writeFile(this[tickets]);//Data Write
       return ticket;
    }




    /**
     * Bulk update by username
     * @param {string} username 
     * @param {{username:string,price:number}} ticketBody 
     * @return {Ticket[]}
     */
    updateBulk(username,ticketBody){
       const userTickets=this.findByUserName(username);
       const updatedTickets=userTickets.map(
           /**
            * @param {Ticket} ticket
            */
           (ticket)=>this.updateById(ticket.id,ticketBody)
       );
       writeFile(this[tickets]);//Data Write
       return updatedTickets;
    }
    

    /**
     * Delete Ticket Useing Index
     * @param {string} ticketId 
     * @return {boolean}
     */
    deleteById(ticketId){
       const fIndex=this[tickets].findIndex(
           /**
            * @param {Ticket} ticket
            */
           (item)=>item.id==ticketId
       )
       if(fIndex==-1){
           return false;
       }else{
           this[tickets].splice(fIndex,1)
           writeFile(this[tickets]);//Data Write
           return true;
       }
    }

    
    /**
     * Bulk delete by username
     * @param {string} username 
     * @return {boolean}
     */
    deleteBulk(username){
       const userTickets=this.findByUserName(username);
       const deletedResult=userTickets.map(
           /**
            * @param {Ticket} ticket
            */
           (ticket)=>this.deleteById(ticket.id)
       )
       writeFile(this[tickets]);//Data Write
       return deletedResult;
    }


    
    /**
     * Find winner tickets
     * @param {number} winnerCount 
     * @return {Ticket[]}
     */
    draw(winnerCount){
       const winnerIndexs=new Array(winnerCount);

       let wcIndex=0;
       while(wcIndex<winnerCount){
          const ticketIndex=Math.floor(Math.random()*this[tickets].length);
          if(!winnerIndexs.includes(ticketIndex)){
              winnerIndexs[wcIndex++]=ticketIndex;
              continue;
          }
       }
       
       const winners=winnerIndexs.map(
           /**
            * @param {number} index  
            */
           (index)=>this[tickets][index]
       );
       return winners;
    }

}
const collection=new TicketCollection();
module.exports=collection;