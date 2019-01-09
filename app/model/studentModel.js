'use strict';
var sql=require('./db.js');

var student=function (student) {
        this.name=student.name;
        this.phno=student.phno;
        this.email=student.email;
        this.password=student.password;
        this.created_at=new Date();
};
student.createUser=function createUser(newData,result){
    sql.query("INSERT INTO student set ?",newData,function (err,res) {
        if(err){
            console.log("error: ",err);
            result(err,null)
        }
    })
}