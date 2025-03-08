#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <stdio.h>

int count = 0;

int main(){
    pid_t pid;
    pid = fork();
    if(pid == 0){
        printf("I am children process");
    } else if(pid > 0) {
        printf("I am parent process");
    }
    return 0;
}