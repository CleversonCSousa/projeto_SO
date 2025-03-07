# munmap

Possui dois argumentos o primeiro é o endereço que começa a região que deseja liberar e o segundo é a quantidade em bytes que será liberado (deve ser a mesma quantidade alocada anteriormente pelo mmap)

Retornará 0 caso tenha removido completamente os mapeamentos e -1 em caso de erro