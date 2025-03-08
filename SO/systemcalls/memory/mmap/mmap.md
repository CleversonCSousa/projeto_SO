# mmap

Cria um novo mapeamento no espaço de endereço virtual do
processo de chamada. O endereço inicial para o novo mapeamento é
especificado em addr . O argumento length especifica o comprimento de
o mapeamento (que deve ser maior que 0). Caso o primeiro argumento seja NULL(addr), então o kernel que ficará responsável por escolher o endereço.

Argumentos
1 - O endereço para a região onde você quer que seja feito o mapeamento de memória (NULL para deixa que o kernel lide)
2 - A quantidade em bytes a serem mapeados na memória
3 - A proteção de acesso a memória mapeada, temos algumas constantes que podemos utilizar para definir o nível de acesso.
4 - Flags de mapeamento (define o comportamento do mapeamento de memória), como se pode ser compartilhada se vai forçar escrever em uma determinada região (pode ocorrer a sobrescrita de dados já existentes)
5 - O fd do arquivo que você deseja mapear
6 - Offset, se estiver dentro de um arquivo especifica a partir de qual byte o mapeamento do arquivo deverá ser feito.

OBSERVAÇÕES.
O conteúdo de um mapeamento de arquivo são inicializados usando bytes de comprimento começando no deslocamento no arquivo referenciado pelo descritor de arquivo fd. offset deve ser múltiplo do tamanho da página retornado por sysconf(\_SC_PAGE_SIZE)
