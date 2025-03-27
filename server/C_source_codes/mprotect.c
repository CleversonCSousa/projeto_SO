#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/mman.h>
#include <stdio.h>
#include <signal.h>

void sigsegv_handler(int sig) {
    printf("Não pode escrever na memória...\n");
    exit(0); 
}

int main() {
    // Registra o handler para o sinal SIGSEGV (Segmentation Fault) para continuar a execução do programa, mesmo após o segmentation fault
    signal(SIGSEGV, sigsegv_handler);
    int size = 10;

    // Mapeia uma região de memória anônima compartilhada
    int *ptr = (int*) mmap(NULL, size * sizeof(int), PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANON, -1, 0);

    // Verifica se o mapeamento de memória falhou
    if (ptr == MAP_FAILED) {
        perror("Falha ao mapear memória");
        return 1;
    }

    // Preenche a memória alocada com valores de 1 a 10
    for (int i = 0; i < size; i++) {
        ptr[i] = i + 1;
    }

    // Exibe o endereço da memória mapeada
    printf("Endereço da memória mapeada: %p\n", ptr);

    // Desabilita a escrita na memória e permite somente leitura
    if (mprotect(ptr, size * sizeof(int), PROT_READ) == -1) {
        perror("Erro ao modificar permissões de memória com mprotect");
        return 1;
    }
    // Tentativa de escrever na memória (isso deverá falhar, já que a escrita foi desabilitada)
    for (int i = 0; i < size; i++) {
        // A tentativa de escrever na memória protegida irá falhar
        // Normalmente, isso resultaria em um Segmentation Fault ou erro de proteção
        ptr[i] = i + 1;  // Espera-se que isso falhe devido à permissão de leitura apenas
    }

    return 0;
}
