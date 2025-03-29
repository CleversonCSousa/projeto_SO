#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Variável que vai armazenar o conteúdo que será escrito
    char *message = "Hello World\n";
    // Variável para armazenar o tamanho do conteúdo que será escrito
    size_t length = 12;

    // Escreve no terminal e retorna o número de bytes que foram escritos
    ssize_t bytes_written = write(1, message, length);

    // Verifica se houve algum erro na escrita
    if (bytes_written == -1) {
        perror("Erro ao escrever no terminal");
        return 1;
    }

    // Caso não ocorra um erro, podemos imprimir quantos bytes foram escritos no arquivo
    printf("Escritos %zd bytes.\n", bytes_written);

    return 0;
}
