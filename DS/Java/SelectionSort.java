public class SelectionSort {

    /*
     * [1,3,5,3,2,8,5]
     * first --> find minimum and move to the start.
     * set last updated Index = 0,
     * then start from 0 + 1 = 1 and till the end of array find the minimum and move to 0 + 1 = 1
     * set last updated Index = 1 ,
     * and so on
     *
     * i = 1, minIndex = 1, j = 2,
     * i = 0, minIndex = 0, j = 2,
     *
     *
     * */
    public int[] sort(int[] numbers) {
        for (var i = 0; i < numbers.length; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] < numbers[i]) {
                    swap(numbers, j, i);
                }
            }
        }
        return numbers;
    }

    public int[] sortByMosh(int[] numbers) {
        for (var i = 0; i < numbers.length; i++) {
            var minIndex = i;
            for (var j = i; j < numbers.length; j++)
                if (numbers[j] < numbers[minIndex])
                    minIndex = j;
            swap(numbers, minIndex, i);
        }
        return numbers;
    }
    private void swap(int[] numbers, int index1, int index2) {
        var saved = numbers[index1];
        numbers[index1] = numbers[index2];
        numbers[index2] = saved;
    }
}
