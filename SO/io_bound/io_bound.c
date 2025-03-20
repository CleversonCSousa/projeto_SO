#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main() {
    FILE *file;
    char* filename = "out.txt";
    
    // Abrindo um arquivo para escrita
    file = fopen(filename, "w");
    if (file == NULL) {
        perror("Erro ao abrir o arquivo para escrita");
        return 1;
    }

    // Escreve dados no arquivo (somente operação de escrita)
    for (int i = 0; i < 10000000; i++) {
        fprintf(file, "Hello World\n");
    }

    // Fecha o arquivo após a escrita
    fclose(file);

    printf("Operação de escrita concluída.\n");

    return 0;
}
