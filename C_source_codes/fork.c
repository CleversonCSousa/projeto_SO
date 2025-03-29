#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <stdio.h>

int main() {
    pid_t pid;

    // Cria um novo processo
    pid = fork();

    // Verifica se está executando o processo filho
    if (pid == 0) {
        printf("I am child process\n");
        exit(0);  // O filho termina sua execução aqui
    } else if (pid > 0) {  // Verifica se está executando o processo pai
        printf("I am parent process\n");
    } else { // Se retornou qualquer valor < 0 significia que ocorreu um erro
        perror("fork failed");
        return 1;
    }

    return 0;
}
