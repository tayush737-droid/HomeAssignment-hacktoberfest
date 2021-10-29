#include <stdio.h>
int main() {    

    int number1, number2, sum,diff;
    
    printf("Enter two integers: ");
    scanf("%d %d", &number1, &number2);

    // calculating sum
    sum = number1 + number2; 
    diff = number1 - number2;
    
    printf("%d + %d = %d", number1, number2, sum);
    
    printf("%d - %d = %d", number1, number2, diff );
    return 0;
}
