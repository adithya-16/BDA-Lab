MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> use college;
switched to db college
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("student");

{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477492, 1),
		"signature" : {
			"hash" : BinData(0,"jgz8zxaPcfbh24C1ikCTr+rv+Ww="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477492, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("faculty");

{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477500, 1),
		"signature" : {
			"hash" : BinData(0,"h7wH5CFOY/XKcXgwMDbY2yFuCkc="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477500, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("library");

{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477523, 1),
		"signature" : {
			"hash" : BinData(0,"y7S/hEApoZLrfkP9Mlz2qc12prg="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477523, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("coe");
{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477530, 1),
		"signature" : {
			"hash" : BinData(0,"ZCgXA7WKLuJvHHk/HVsgsiNOCPI="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477530, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("admission");
{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477535, 1),
		"signature" : {
			"hash" : BinData(0,"7JG+5e3wgyX3EARNzCrp9nCV/5M="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477535, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("festival");
{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477555, 1),
		"signature" : {
			"hash" : BinData(0,"cuy96HgJSlZ0eorqoBPKo7jDMRA="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477555, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db;
college
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.student.insert({usn: 128, name: "Adithya", sem: 6});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.student.insert({usn: 5, name: "Seb", sem: 6});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.student.insert({usn: 33, name: "Max", sem: 4});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.student.insert({usn: 14, name: "Fred", sem: 8});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.faculty.insert({dept: "cse", name: "Marko", tenure: 17});
WriteResult({ "nInserted" : 1 })                 db.faculty.insert({dept: "ise", name: "Sbin", tenure: 8});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.faculty.findAll()
uncaught exception: TypeError: db.faculty.findAll is not a function :
@(shell):1:1
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.faculty.find();
{ "_id" : ObjectId("607802ceecc76bb6f778706d"), "dept" : "cse", "name" : "Marko", "tenure" : 17 }
{ "_id" : ObjectId("607802d8ecc76bb6f778706e"), "dept" : "cse", "name" : "Chris", "tenure" : 9 }
{ "_id" : ObjectId("607802e9ecc76bb6f778706f"), "dept" : "ise", "name" : "Abi", "tenure" : 4 }
{ "_id" : ObjectId("60780312ecc76bb6f7787070"), "dept" : "ise", "name" : "Sbin", "tenure" : 8 }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.library.insert({slno: 14, book_name: "BDA"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.library.insert({slno: 11, book_name: "ADS"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.library.insert({slno: 31, book_name: "RPA"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.library.insert({slno: 32, book_name: "OR"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.coe.insert({designation: "head", name: "Proc"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.coe.insert({designation: "vicehead", name: "Tor"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.coe.insert({designation: "staff", name: "Invigi"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.coe.insert({designation: "staff", name: "Lator"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.admission.insert({type: "cet", cost: 10000});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.admission.insert({type: "comedk", cost: 20000});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.admission.insert({type: "management", cost: 40000});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.admission.insert({type: "other", cost: 15000});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.festival.insert({year: 2016, dept: "cse", organiser: "Marko", theme: "crypto", cost: 15000, capacity: "full"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.festival.insert({year: 2016, dept: "ise", organiser: "Abi", theme: "iot", cost: 12000, capacity: "half"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.festival.insert({year: 2018, dept: "cse", organiser: "Chris", theme: "ml", cost: 19000, capacity: "half"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.festival.insert({year: 2020, dept: "ise", organiser: "Sbin", theme: "compcoding", cost: 28000, capacity: "full"});
WriteResult({ "nInserted" : 1 })
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.student.find()
{ "_id" : ObjectId("6078025becc76bb6f7787069"), "usn" : 128, "name" : "Adithya", "sem" : 6 }
{ "_id" : ObjectId("6078026fecc76bb6f778706a"), "usn" : 5, "name" : "Seb", "sem" : 6 }
{ "_id" : ObjectId("60780282ecc76bb6f778706b"), "usn" : 33, "name" : "Max", "sem" : 4 }
{ "_id" : ObjectId("6078028fecc76bb6f778706c"), "usn" : 14, "name" : "Fred", "sem" : 8 }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.faculty.find()
{ "_id" : ObjectId("607802ceecc76bb6f778706d"), "dept" : "cse", "name" : "Marko", "tenure" : 17 }
{ "_id" : ObjectId("607802d8ecc76bb6f778706e"), "dept" : "cse", "name" : "Chris", "tenure" : 9 }
{ "_id" : ObjectId("607802e9ecc76bb6f778706f"), "dept" : "ise", "name" : "Abi", "tenure" : 4 }
{ "_id" : ObjectId("60780312ecc76bb6f7787070"), "dept" : "ise", "name" : "Sbin", "tenure" : 8 }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.coe.find()
{ "_id" : ObjectId("607803ccecc76bb6f7787075"), "designation" : "head", "name" : "Proc" }
{ "_id" : ObjectId("607803d4ecc76bb6f7787076"), "designation" : "vicehead", "name" : "Tor" }
{ "_id" : ObjectId("607803e8ecc76bb6f7787077"), "designation" : "staff", "name" : "Invigi" }
{ "_id" : ObjectId("607803eeecc76bb6f7787078"), "designation" : "staff", "name" : "Lator" }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.admission.find()
{ "_id" : ObjectId("6078045decc76bb6f7787079"), "type" : "cet", "cost" : 10000 }
{ "_id" : ObjectId("60780465ecc76bb6f778707a"), "type" : "comedk", "cost" : 20000 }
{ "_id" : ObjectId("6078046eecc76bb6f778707b"), "type" : "management", "cost" : 40000 }
{ "_id" : ObjectId("6078047decc76bb6f778707c"), "type" : "other", "cost" : 15000 }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.library.find()
{ "_id" : ObjectId("6078037cecc76bb6f7787071"), "slno" : 14, "book_name" : "BDA" }
{ "_id" : ObjectId("60780384ecc76bb6f7787072"), "slno" : 11, "book_name" : "ADS" }
{ "_id" : ObjectId("60780390ecc76bb6f7787073"), "slno" : 31, "book_name" : "RPA" }
{ "_id" : ObjectId("60780397ecc76bb6f7787074"), "slno" : 32, "book_name" : "OR" }
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.festival.find()
{ "_id" : ObjectId("607804eaecc76bb6f778707d"), "year" : 2016, "dept" : "cse", "organiser" : "Marko", "theme" : "crypto", "cost" : 15000, "capacity" : "full" }
{ "_id" : ObjectId("6078050cecc76bb6f778707e"), "year" : 2016, "dept" : "ise", "organiser" : "Abi", "theme" : "iot", "cost" : 12000, "capacity" : "half" }
{ "_id" : ObjectId("6078058cecc76bb6f778707f"), "year" : 2018, "dept" : "cse", "organiser" : "Chris", "theme" : "ml", "cost" : 19000, "capacity" : "half" }
{ "_id" : ObjectId("607805baecc76bb6f7787080"), "year" : 2020, "dept" : "ise", "organiser" : "Sbin", "theme" : "compcoding", "cost" : 28000, "capacity" : "full" }
