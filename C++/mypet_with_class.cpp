#include <iostream>
class Animal
{
    //참고로 키워드 명시를 하지 않았다면 기본적으로 private 로 설정
private: //객체 안에서만 접근이 가능
    //멤버 변수
    int food;
    int weight;

public:
    //멤버 함수
    void set_animal(int _food, int _weight)
    {
        food = _food;
        weight = _weight;
    }

    void increase_food(int inc)
    {
        food += inc;
        weight += (inc / 3);
    }

    void view_stat()
    {
        std::cout << "food: " << food << std::endl;
        std::cout << "weight: " << weight << std::endl;
    }
};

class Date
{
    int year_;
    int month_;
    int day_;

public:
    void setDate(int year, int month, int day)
    {
        year_ = year;
        month_ = month;
        day_ = day;
    }
    void AddDay(int inc)
    {
        if (month_ == 2)
        {
            if (day_ + inc > 28)
            {
                month_ += 1;
                day_ = (day_ + inc) - 28 - 1;
            };
        }
        else if (month_ == 12)
        {

            if (day_ + inc > 31)
            {
                month_ = 1;
                day_ = (day_ + inc) - 31 - 1;
            }
        }
        else
        {
            if (day_ + inc > 31)
            {
                month_ += 1;
                day_ = (day_ + inc) - 31 - 1;
            }
        }
    }
    void AddMonth(int inc)
    {
        if (month_ + inc > 12)
        {
            month_ = 12 - (month_ + inc);
        }
        else
        {
            month_ += inc;
        }
    };
    void AddYear(int inc)
    {
        year_ += inc;
    }

    void ShowDate()
    {
        std::cout << year_ << "/" << month_ << "/" << day_;
    };
};

int main()
{
    Date date;
    date.setDate(2012, 2, 28);
    date.AddDay(3);

    date.ShowDate();

    return 0;
}
