#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <stdio.h>

int main(){
    pid_t pid;
    int count;
    pid = fork();
    if(pid == 0){
        count = 1;
        printf("I am children with pid = %d and pid of parent = %d\n", getpid(), getppid());
        printf("Value count: %d\n", count);
    } else if(pid > 0) {
        printf("I am parent process with pid = %d\n", getpid());
        printf("Value count: %d\n", count);
    }
    return 0;
}