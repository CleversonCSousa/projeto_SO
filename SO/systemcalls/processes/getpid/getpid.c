#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <stdio.h>

int main() {
    pid_t pid;
    
    // Cria um novo processo
    pid = fork();

    if (pid == 0) {  // Processo filho
        printf("I am child process with pid = %d\n", getpid());
        printf("Child process finishing\n");
    } else if (pid > 0) {  // Processo pai
        printf("I am parent process with pid = %d\n", getpid());
        printf("Parent process finishing\n");
    } else {
        perror("fork failed");
        return 1;
    }

    return 0;
}
