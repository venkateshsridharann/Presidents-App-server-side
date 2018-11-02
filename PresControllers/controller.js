import db from '../db/db';

// const names = db.map(name=>name.President)

class PresController {

	getAllPresidents(req, res) {
    	 return res.status(200).send(db);
  }

  	getAllPresidentsAsc(req, res) {
  		  var [...asc]= db
  		  asc = asc.sort((a,b)=>{
        var A = a.president.toUpperCase();
        var B = b.president.toUpperCase();
        if (A < B) {
          return -1;
        }
        else {
          return 1;
        }
      });
   		return res.status(200).send(asc); 
  }

  getAllPresidentsDesc(req, res) {
  		  var [...desc]= db
  		  desc = desc.sort((a,b)=>{
  			var A = a.president.toUpperCase();
  			var B = b.president.toUpperCase();
  			if (A > B) {
    			return -1;
  			}
  			else {
    			return 1;
  			}
  		});
  		
   		return res.status(200).send(desc); 
  }


}
const presController = new PresController();
export default presController;
