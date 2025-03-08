#include <unistd.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <stdio.h>

int main(){
    int n, fd;
    char buffer[100];
    // Abre o arquivo
    fd = open("test.txt", O_RDONLY);
    // Le
    n = read(fd, buffer, 10);
    write(1, buffer, 10);
    return 0;
}