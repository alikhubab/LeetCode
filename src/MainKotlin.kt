import java.util.LinkedList

object MainKotlin {
    @JvmStatic
    fun main(args: Array<String>) {
        val regionsBySlashes = RegionsBySlashes()
        val result = regionsBySlashes.regionsBySlashes(arrayOf(" /","/ "))
        println(result)
    }
}
