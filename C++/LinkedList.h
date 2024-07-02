//
// Created by GONEROGUE on 5/17/2023.
//
#include <cstddef>
#include "iostream"

using namespace std;

struct Node {
    int data;
    Node *next;
};

class LinkedList {
private:
    Node *head, *tail;
public:
    LinkedList() {
        head = nullptr;
        tail = nullptr;
    }

    void addNode(int n) {
        Node *tmp = new Node;
        tmp->data = n;
        tmp->next = nullptr;

        if (head == nullptr) {
            head = tmp;
            tail = tmp;
        } else {
            tail->next = tmp;
            tail = tail->next;
        }
    }

    void pairSum() {
        int size = 0;
        int max = 0;
        Node *iterator = head;
        while (iterator != nullptr) {
            std::cout << iterator->data;
            iterator = iterator->next;
            size++;
        }
        int array[size / 2];

//        1  -> 2 -> 3 -> 4 -> 5 -> 6
        int counter = 0;
        iterator = head;
        while (counter < size / 2) {
            array[counter] = iterator->data;
            iterator = iterator->next;
            counter++;
        }
        if (size % 2 != 0) {
            iterator = iterator->next;
        }
        while (iterator != nullptr) {
            array[counter - 1] += iterator->data;
            if (array[counter - 1] > max) {
                max = array[counter - 1];
            }
            iterator = iterator->next;
            counter--;
        }


//        int counter = 0;
//        Node *halfPointer = head->next;
//        Node *prevPointer = head;
//        while (counter < size / 2 - 1) {
//            prevPointer = prevPointer->next;
//            halfPointer = halfPointer->next;
//            std::cout << "counter";
//            std::cout << halfPointer->data;
//            counter++;
//        }
//
//        std::cout << halfPointer->data;
    }
};

