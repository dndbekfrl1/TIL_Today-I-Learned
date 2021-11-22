#include <iostream>

int change_val(int *p)
{
    *p = 3;

    return 0;
}

int &function()
{
    int a = 2;
    return a;
}
int &function2(int &a)
{
    a = 5;
    return a;
}

int main()
{
    int number = 5;

    std::cout << number << std::endl;
    change_val(&number);
    std::cout << number << std::endl;

    /*
    reference
    참조자를 사용하게 되면 불필요한 & 와 * 가 필요 없기 때문에 코드를 훨씬 간결하게 작성 가능
    */
    int a = 3;
    int &another_a = a; //a의 참조자 another_a
    //another_a는 a의 참조자 즉 a의 또다른 이름

    another_a = 5;

    std::cout << "a: " << a << std::endl;
    std::cout << "another_a " << another_a << std::endl;

    //reference는 메모리 상에 존재하지 않을 수도 있다
    // int x = 10;
    // int &another_x = x; // 이 경우 메모리상에 레퍼런스는 존재하지 않는다.

    //reference 예제
    int x = 1;
    int &y = x;
    int &z = y;

    x = 1;
    std::cout << "x: " << x << " y: " << y << " z: " << z << std::endl;
    //x: 1 y: 1 z: 1

    y = 2;
    std::cout << "x: " << x << " y: " << y << " z: " << z << std::endl;
    //x: 2 y: 2 z: 2

    z = 3;
    std::cout << "x: " << x << " y: " << y << " z: " << z << std::endl;
    //x: 3 y: 3 z: 3

    //상수에 대한 참조자
    //int &ref = 4; --> 불가능
    //std::cout << ref << std::endl;
    //상수 값 자체는 리터럴이기에 리터럴의 값을 바꾸는 행위를 방지
    const int &ref = 4; //상수 참조자로 선언하면 리터럴도 참조 가능
    int m = ref;

    //레퍼런스의 배열
    // ***레퍼런스는 특별한 경우가 아닌 이상 메모리 상에서 공간을 차지하지 않는다.***

    //배열의 레퍼런스
    int arr[3] = {1, 2, 3};
    int(&ref_)[3] = arr; //반드시 배열의 크기를 명시해야함
    std::cout << ref << std::endl;

    //레퍼런스를 리턴하는 함수
    int g = function(); //warning: reference to stack memory associated with local variable 'a' returned [-Wreturn-stack-address]return a;
    //dangling reference 원래 참조 하던 것이 사라진 레퍼런스
    //그래서 우리는 지역변수의 레퍼런스를 리턴하지 않도록 해야한다
    g = 5;
    //외부 변수이 레퍼런스 리턴
    int k = 3;
    int h = function2(k);
    //C 언어에서 엄청나게 큰 구조체가 있을 때 해당 구조체 변수를 그냥 리턴하면 전체 복사가 발생해야 해서 시간이 오래걸리지만, 해당 구조체를 가리키는 포인터를 리턴한다면 그냥 포인터 주소 한 번 복사로 매우 빠르게 끝납니다
    //참조하는 타입의 크기와 상관 없이 딱 한 번의 주소값 복사로 전달이 끝나게 됩니다. 따라서 매우 효율적이죠!

    /**
     * 
     * 문제) 레퍼런스가 메모리 상에 반드시 존재해야 하는 경우는 어떤 경우가 있을까요? 그리고 메모리 상에 존재할 필요가 없는 경우는 또 어떤 경우가 있을 까요?
        1) 호출 스택이 달라질 때, 해당 메모리에 접근하기 위해 주소가 필요하다. 주소 메모리 공간이 필요하다.
        2) 호출 스택이 같을 때, 바로 접근하며 따로 주소 메모리 공간이 불필요하다.
     * 
     **/
}
