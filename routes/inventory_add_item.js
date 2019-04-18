var db=require("./database")
module.exports=(req,res)=>{
	//var id=req.body.item_id;
	var item=req.body.item_item;
	var initial=req.body.item_initial_quantity;
	var remaining=req.body.item_remaining_quantity;

	var sql="insert into inventory (item,initial_quantity,remaining_quantity) values('"+item+"','"+initial+"','"+remaining+"')"


     db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/inventory')
})
}

