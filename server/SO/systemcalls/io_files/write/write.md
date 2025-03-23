# write

Essa função permite com que escrevemos em arquivos ou dispositivos.

Temos 3 argumentos sendo eles.
1 - O fd (file descriptor) que é um identificador numérico atribuído a um arquivo ou dispositivo que está aberto.

2 - Um ponteiro para o buffer que contém os dados a serem escritos

3 - O número de bytes a serem escritos a partir do buffer

Retorno
A função retornará -1 caso ocorra um erro e retornará o número de bytes escritos em caso de sucesso.