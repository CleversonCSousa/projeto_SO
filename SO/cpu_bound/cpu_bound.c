#include <stdio.h>
#include <stdlib.h>

int main() {
    long n = 10000000000;  // número de iterações
    long i;
    // O processo simplesmente fará somas para consumir a CPU
    printf("Iniciando cálculo...\n");

    // Loop CPU Bound
    for(i = 1; i <= n; i++) {
        i = i + 1;  // Realiza operaçãos de somas para consumir a CPU
    }

    printf("Cálculo concluído!\n");
    return 0;
}
