#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <stdio.h>

int count = 0;

int main(){
    pid_t pid;
    pid = fork();
    if(pid == 0){
        printf("Waiting...\n");
        sleep(3);
        printf("I am children process\n");
    } else if(pid > 0) {
        wait(NULL);
        printf("Children process terminated\n");
        printf("I am parent process\n");
    }
    return 0;
}