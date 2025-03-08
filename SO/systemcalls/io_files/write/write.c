#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <stdio.h>

int count = 0;

int main(){
    // Escreve no terminal Hello World com quebra de linha
    int success = write(1, "Hello World\n", 12);
    if(success == -1) {
        perror("Failed");
    }
    return 0;
}