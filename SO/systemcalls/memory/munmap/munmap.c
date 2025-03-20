#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/mman.h>
#include <stdio.h>


int main(){
    int size = 10;    
    int *ptr = (int*) mmap(NULL, size * sizeof(int), PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANON, -1, 0);

    if (ptr == MAP_FAILED) {
        printf("mmap failed");
        return 1;
    }

    printf("Andress: %p\n", ptr);

    int result = munmap(ptr, size * sizeof(int));

    if(result == 0){
        printf("sucesfull\n");
    } else {
        printf("failed\n");
    }
    return 0;
}