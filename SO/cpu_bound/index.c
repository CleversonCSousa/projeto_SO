#include <stdio.h>

#define FILE_SIZE 1024 * 10  // 10 KB
#define NUM_WRITES 100000

int main() {
    int i;
    unsigned long long result;
    
    // Número muito alto para garantir tempo considerável de execução

    for (i = 0; i < 1000000000; i++) {
        // Só para ocupar por um tempo a CPU
    }

    FILE *file;
    char buffer[FILE_SIZE];
    
    // Preenche o buffer com dados
    for (int i = 0; i < FILE_SIZE - 1; i++) {
        buffer[i] = 'A';
    }
    buffer[FILE_SIZE - 1] = '\0';

    // Abrir o arquivo para escrita
    file = fopen("tempfile.txt", "w");
    if (!file) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Escrever no arquivo várias vezes
    for (int i = 0; i < NUM_WRITES; i++) {
        fwrite(buffer, 1, FILE_SIZE, file);
    }

    fclose(file);
        
    return 0;
}
