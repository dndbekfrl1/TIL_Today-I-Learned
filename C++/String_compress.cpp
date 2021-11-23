#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(string s)
{
    int answer = s.size();

    for (int i = 1; i <= s.size() / 2; i++)
    {
        int cnt = 1;
        string convert, tmp;
        tmp = s.substr(0, i);

        for (int j = i; j < s.size(); j += i)
        {
            string str = s.substr(j, i);
            if (tmp == str)
            {
                cnt += 1;
            }
            else
            {
                if (cnt > 1)
                    convert += to_string(cnt);
                convert += tmp;
                tmp = str;
                cnt = 1;
            }
        }
        if (cnt > 1)
            convert += to_string(cnt);
        convert += tmp;
        int res = convert.size();
        answer = min(answer, res);
    }

    return answer;
}