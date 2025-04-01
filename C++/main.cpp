#include <iostream>
#include "LinkedList.h"
#include "EditDistance.h"

int main() {
//     std::cout << "Hello, World!" << std::endl;
//     LinkedList list;
//     list.addNode(1);
//     list.addNode(6);
//     list.addNode(9);
//     list.addNode(10);
//     list.addNode(23);
//     list.addNode(30);
//
//     list.pairSum();
        EditDistance1 editDistance;
        std::cout << editDistance.minDistance("horse", "ros");

         return 0;
}
