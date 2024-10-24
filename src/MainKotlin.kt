import java.util.LinkedList

object MainKotlin {
    @JvmStatic
    fun main(args: Array<String>) {
//        val regionsBySlashes = RegionsBySlashes()
//        val result = regionsBySlashes.regionsBySlashes(arrayOf(" /","/ "))
        val regionsBySlashes = RegionsBySlashesByDisjointSetTriangles()
//        val result = regionsBySlashes.regionBySlashes(arrayOf(" /","/ "))
        val result = regionsBySlashes.regionBySlashes(arrayOf("/\\","\\/"))
        println(result)
    }
}
