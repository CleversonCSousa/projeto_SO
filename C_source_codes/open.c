#include <unistd.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <stdio.h>

int main(){
    // Variáveis para contar a quantidade de caracteres lidos, armazenar o file descriptor e um buffer para armazenar os dados lidos
    int count, fd;
    char buffer[100];
    // Abre o arquivo no modo leitura
    fd = open("texto.txt", O_RDONLY);

    if(fd == -1) {
        perror("Erro ao abrir o arquivo");
        return 1;
    }

    // Le o arquivo e armazena os dados em um buffer
    count = read(fd, buffer, 100);

    // Verifica se a leitura ocorreu com sucesso
    if(count == -1){
        perror("Erro ao ler o arquivo");
        close(fd);
        return 1;
    }

    // Garante que a string lida tenha um \n;
    buffer[count] = '\0';

    // Imprime o conteúdo lido do arquivo
    printf("Conteúdo lido: %s\n", buffer);

    // Fecha o arquivo
    close(fd);
    return 0;
}