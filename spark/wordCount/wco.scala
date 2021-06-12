import org.apache.spark.SparkConf
import org.apache.spark.SparkContext
import org.apache.spark.rdd.RDD.rddToPairRDDFunctions
object WordCount {
    def main(args: Array[String]) = { 
        val test = sc.textFile("sparktext.txt")
        test.flatMap {line => line.split(" ")}
            .map {word => (word, 1)}
            .reduceByKey(_ + _)
            .saveAsTextFile("output.txt")
        sc.stop
    }
}