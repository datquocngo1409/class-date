var MyDate = function(day, month, year) {

  this.getDay = function () {
    return this.day;
  }

  this.getMonth = function () {
    return this.month;
  }

  this.getYear = function () {
    return this.year;
  }

  this.setDay = function(day) {
    this.day  = day;
  }

  this.setMonth = function(month) {
    this.month  = month;
  }

  this.setYear = function(year) {
    this.year  = year;
  }
  
  this.setDate = function (day, month, year) {
    this.day=day;
    this.month=month;
    this.year=year;
  }

  this.toString = function () {
    var s = "";
    s=s+this.day+'/'+this.month+'/'+this.year;
    return s;
  }
};

var date = new MyDate();
date.setDate(2,2,2007);
var day = date.getDay();
var month = date.getMonth();
var year = date.getYear();
alert(date.toString());
