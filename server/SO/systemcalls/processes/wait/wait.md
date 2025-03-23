# wait

A função wait é usada por um processo pai para esperar a execução de seus processos filhos.

Há somente um único argumento que é um ponteiro para o status de término do filho, este é opcional.

O wait retorna o pid do filho do processo que o invocou em caso de sucesso, em caso de erro retorna -1