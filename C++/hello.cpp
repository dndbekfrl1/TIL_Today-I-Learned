#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5};

    for (const auto &i : arr)
    {
        cout << i << "\n";
    }

    return 0;
}