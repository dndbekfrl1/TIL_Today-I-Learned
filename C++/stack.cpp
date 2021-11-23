/**
* 균형잡힌 문자열 : ( )의 개수가 같음
* 올바른 문자열: 짝이 모두 맞음

u->균형잡힌 괄호 문자열
v->""가능

if u = 올바름
v -> 1수행

else
(
+v'
+)
+
reverse u[1:-1]

**/
#include <string>
#include <vector>
#include <stack>
#include <iostream>

using namespace std;

bool isSorted(string p)
{
    int left = 0;
    for (int i = 0; i < p.size(); i++)
    {
        char s = p[i];
        if (s == '(')
            left += 1;
        else
            left -= 1;

        if (left < 0)
        {
            return false;
        }
    }
    if (left == 0)
        return true;
    else
        return false;
}

string solution(string p)
{
    if (p == "")
        return p;

    string answer = "";
    string u, v = "";
    int l = 0;
    int r = 0;

    for (int i = 0; i < p.size(); i++)
    {
        char s = p[i];
        if (s == '(')
            l += 1;
        else
            r += 1;

        if (l == r && l != 0)
        {
            u = p.substr(0, i + 1);
            v = p.substr(i + 1);
            std::cout << u << " -- " << v << std::endl;
            break;
        }
    }
    if (isSorted(u))
    {
        std::cout << "sorted" << u << std::endl;
        return u + solution(v);
    }
    else
    {
        string tmp = "";
        for (int j = 1; j < u.size() - 1; j++)
        {
            if (u[j] == '(')
                tmp += ")";
            else
                tmp += "(";
        }
        std::cout << "not sorted" << tmp << std::endl;
        string reversed_u = tmp;
        answer = "(" + v + ")" + reversed_u;
        return answer;
    }
    return answer;
}

int main()
{
    string ans = solution(")(");
    std::cout << ans << std::endl;
    return 0;
}