var db=require("./database")
module.exports=(req,res)=>{
	var title=req.body.achievement_title;
	var desc=req.body.achievement_desc;

	var sql="insert into achievements (title,description) values('"+title+"','"+desc+"')"

  db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/achievements')
})
}