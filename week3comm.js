MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("Student");

{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477049, 1),
		"signature" : {
			"hash" : BinData(0,"V370wGzg/T7JWTd1bhwPHazMveQ="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477049, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.Student.drop()
true
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.createCollection("Students");
{
	"ok" : 1,
	"$clusterTime" : {
		"clusterTime" : Timestamp(1618477076, 1),
		"signature" : {
			"hash" : BinData(0,"+0g87fEU+XYokBGE6zUbS4enKyY="),
			"keyId" : NumberLong("6918470828069748737")
		}
	},
	"operationTime" : Timestamp(1618477076, 1)
}
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.Student.find({Grade:"VIII"});
MongoDB Enterprise atlas-44pltp-shard-0:PRIMARY> db.Student.find({Grade:"VII"});

{ "_id" : 1, "StudName" : "MichelleJacintha", "Grade" : "VII", "Hobbies" : "InternetSurfing" }
