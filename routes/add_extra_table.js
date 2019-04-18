var db=require('./database')

module.exports=(req,res)=>{

 var col1=req.body.col1;
 var col2=req.body.col2;
 var col3=req.body.col3;
 var col4=req.body.col4;
 var col5=req.body.col5;

 var sql="insert into add_extra_table (col1,col2,col3,col4,col5) values('"+col1+"','"+col2+"','"+col3+"','"+col4+"','"+col5+"')"

 db.query(sql,(err,results)=>{
	if(err)
		console.log(err)
	else
		return res.redirect('/table')
})
}