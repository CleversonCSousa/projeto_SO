#include <stdio.h>
#include <sys/stat.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    char *path = "teste.txt";
    struct stat fileStat;

    // Obtém as informações sobre o arquivo
    if (stat(path, &fileStat) < 0) {
        perror("Erro ao obter informações sobre o arquivo");
        return 1;
    }

    printf("Informações sobre o arquivo '%s':\n", path);
    printf("Tamanho do arquivo: %ld bytes\n", fileStat.st_size);
    printf("Permissões: %o\n", fileStat.st_mode & 0777);  // Máscara para mostrar as permissões
    printf("Número de links simbólicos: %ld\n", fileStat.st_nlink);
    printf("ID do usuário proprietário: %d\n", fileStat.st_uid);
    printf("ID do grupo proprietário: %d\n", fileStat.st_gid);
    printf("Última modificação: %ld\n", fileStat.st_mtime);
    printf("Último acesso: %ld\n", fileStat.st_atime);

    return 0;
}
