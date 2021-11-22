#include <iostream>

int main()
{
    int *p = new int; //new로 메모리를 할당하자

    std::cout << *p << " " << p << std::endl;
    *p = 10;

    std::cout << *p << " " << p << std::endl;

    delete p;

    // new 로 배열 할당하기
    int arr_size;
    std::cout << "arr sie : ";
    std::cin >> arr_size;
    int *list = new int[arr_size];
    for (int i = 0; i < arr_size; i++)
    {
        std::cin >> list[i];
    }
    for (int i = 0; i < arr_size; i++)
    {
        std::cout << i << "element :" << list[i] << std::endl;
    }
    delete[] list;
    return 0;
}