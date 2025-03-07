#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/mman.h>
#include <stdio.h>

int count = 0;

int main(){
    int size = 10;    
    /* ptr armazena o endereço onde começa a região que foi mapeada, também utiliza flags para gerenciar as permissões como PROT_READ e PROT_WRITE para permitir
    leitura e escrita MAP_SHARED para permitir com que as alterações na memória sejam compartilhadas para outros processos e MAP_ANON para dizer que é uma memória
    anônima (não está associada a nenhum arquivo)
    */
    int *ptr = (int*) mmap(NULL, size * sizeof(int), PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANON, -1, 0);

    // Preechendo a memória alocada

    for(int i = 0; i < size; i++){
        ptr[i] = i + 1;
    }

    if (ptr == MAP_FAILED) {
        printf("mmap failed");
        return 1;
    }

    printf("Andress: %p\n", ptr);

    // Desabilitando a escrita na memória e deixando somente para leitura
    if (mprotect(ptr, size * sizeof(int), PROT_READ) == -1) {
        perror("Erro no mprotect");
        return 1;
    }

    // Tentando escrever na memória (Vai gerar um erro caso a desabilitação da escrita na memória tenha ocorrido com sucesso)
    for(int i = size; i >= 0; i--){
        ptr[i] = i + 1;
    }

    return 0;
}