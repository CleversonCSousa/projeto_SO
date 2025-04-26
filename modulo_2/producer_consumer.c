#include <stdio.h>
#include <stdlib.h>
#include <semaphore.h>
#include <pthread.h>
#include <unistd.h>

#define BUFFER_SIZE 5 // Tamanho do buffer
#define NUM_ITERACOES 10 // Numero de iterações por threads

int buffer[BUFFER_SIZE];
int in = 0;
int out = 0;

// Semáforos
sem_t empty;
sem_t full;
pthread_mutex_t mutex;

// Função para produzir um item aleatório
int produzir_item() {
    return rand() % 100; // Valor aleatório entre 0 e 99
}

// Função para consumir um item (removido printf duplicado)
void consumir_item(int item) {
    // Apenas consome o item, sem imprimir nada aqui
}

// Thread do produtor
void* produtor(void* arg) {
    for(int i = 0; i < NUM_ITERACOES; i++) {
        int item = produzir_item();
        if(sem_wait(&empty) != 0) {
            perror("Erro em sem_wait(empty)");
        }

        if(pthread_mutex_lock(&mutex) != 0) {
            perror("Erro em pthread_mutex_lock");
            exit(EXIT_FAILURE);
        }

        buffer[in] = item;
        printf("Produtor produziu: %d na posicao %d\n", item, in);
        in = (in + 1) % BUFFER_SIZE;

        if(pthread_mutex_unlock(&mutex) != 0) {
            printf("Erro em pthread_mutex_unlock");
            exit(EXIT_FAILURE);
        }

        if(sem_post(&full) != 0) {
            perror("Erro em sem_post(full)");
            exit(EXIT_FAILURE);
        }

        sleep(1); // Simula tempo de produção
    }
    pthread_exit(NULL);
}

// Thread do consumidor
void* consumidor(void* arg) {
    for(int i = 0; i < NUM_ITERACOES; i++) {
        if(sem_wait(&full) != 0) {
            perror("Erro em sem_wait(full)");
        }

        if(pthread_mutex_lock(&mutex) != 0) {
            perror("Erro em pthread_mutex_lock");
            exit(EXIT_FAILURE);
        }

        int item = buffer[out];
        out = (out + 1) % BUFFER_SIZE;
        printf("Consumidor consumiu: %d na posicao %d\n", item, out);

        if(pthread_mutex_unlock(&mutex) != 0) {
            printf("Erro em pthread_mutex_unlock");
            exit(EXIT_FAILURE);
        }

        if(sem_post(&empty) != 0) {
            perror("Erro em sem_post(empty)");
            exit(EXIT_FAILURE);
        }

        consumir_item(item);
        sleep(2); // Simula tempo de consumo
    }
    pthread_exit(NULL);
}

int main() {
    // Declarando identificadores das threads do produtor e consumidor
    pthread_t prod_thread, cons_thread;

    // Inicialização dos semáforos e mutex
    if(sem_init(&empty, 0, BUFFER_SIZE) != 0)  {
        perror("Erro em sem_init(empty)");
        return EXIT_FAILURE;
    }
    if(sem_init(&full, 0, 0) != 0)  {
        perror("Erro em sem_init(full)");
        return EXIT_FAILURE;
    }
    if(pthread_mutex_init(&mutex, NULL) != 0) {
        perror("Erro em pthread_mutex_init");
        return EXIT_FAILURE;
    }

    // Criação das threads
    if(pthread_create(&prod_thread, NULL, produtor, NULL) != 0) {
        perror("Erro ao criar thread do produtor");
        return EXIT_FAILURE;
    }
    if(pthread_create(&cons_thread, NULL, consumidor, NULL) != 0) {
        perror("Erro ao criar thread do consumidor");
        return EXIT_FAILURE;
    }

    // Espera as threads finalizarem
    if(pthread_join(prod_thread, NULL) != 0) {
        perror("Erro em pthread_join (produtor)");
    }

    if(pthread_join(cons_thread, NULL) != 0) {
        perror("Erro em pthread_join (consumidor)");
    }

    // Destrói os semáforos e mutex
    sem_destroy(&empty);
    sem_destroy(&full);
    pthread_mutex_destroy(&mutex);

    printf("Execução finalizada com sucesso\n");
    return EXIT_SUCCESS;
}
