# Fork
Fork cria um novo processo duplicando o processo que o chamou

Cada processo é executado em uma memória separada, cada um possui seu próprio espaço de endereçamento.

fork retorna um pid, se o pid for 0 significa que estamos no processo filho, se for maior que 0 estamos no processo pa