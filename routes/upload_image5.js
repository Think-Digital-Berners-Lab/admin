var db = require("./database")

module.exports=(req,res)=>{
  var project_name = req.body.project_name;
    if(req.files.pimg4!=""){
    var file = req.files.pimg4;
    var pimg4 = file.name;
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg"
    ) {
      var uploadpath = "public/images/" + pimg4;
      var sqldata =
      "update add_new_project set pimg4='" +
      pimg4 +
      "' where project_name = '" +
      project_name +
      "'  ";
    db.query(sqldata, (err, results, fields) => {
      if (err) console.log("error occured", err);
      else {
        return res.redirect("/project");
      }
    });
    file.mv(uploadpath, err => {
      if (err) throw err;
      else console.log("file uploaded");
    });
  } else res.send("Wrong file format");
    }
    }