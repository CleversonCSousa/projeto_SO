# Como executar o projeto:

No terminal da VM rode: 

1 - cd projeto_SO

2 - docker compose up -d

3 - Acessar http://andromeda.lasdpc.icmc.usp.br:7172 


# Frontend:
## 📌 Simulador de Processos

No frontend é disponibilizado ao usuário o acesso ao simulador de processos, o qual está dividido em cinco páginas distintas, sendo elas:

- **HOME**
- **SYSTEMCALLS**
- **MEMORY**
- **CPU BOUND | IO**

### Página SYSTEMCALLS
Nesta página, é possível simular a execução de processos distintos como:
- `Fork`
- `Getpid`
- `Getppid`
- `Wait`

### Página MEMORY
Nesta página, é possível simular a execução de processos distintos como:
- `mmap`
- `munmap`
- `mprotect`
  
### Página E/S (escrita e arquivos)
Nesta página, é possível simular a execução de processos distintos como:
- `write`
- `open`
- `stat`

### Página CPU BOUND | IO 
Nesta página, é possível simular a execução de processos distintos como:
- `CPU BOUND`
- `CPU IO`

As saídas disponibilizadas incluem:
- `TIMEDATA`
- `STRACE`
- `Source Code`

### 📌Tecnologias:
 - NodeJS
 - Typescript
 - ReactJS
 - Axios
 - React Router

### Estrutura do Projeto

```
frontendSO
│── logs/
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── CPUChart.tsx
│   │   ├── ESChart.tsx
│   │   ├── Footer.tsx
│   │   ├── getTimeChart.tsx
│   │   ├── MemoChart.tsx
│   │   ├── Navbar.tsx
│   │   ├── SysCallChart.tsx
│   ├── layout/
│   │   ├── layout.tsx
│   ├── pages/
│   │   ├── cpu.tsx
│   │   ├── entradasaida.tsx
│   │   ├── memo.tsx
│   │   ├── routes.tsx
│   │   ├── syscall.tsx
│   ├── styles/
│   │   ├── App.module.css
│   │   ├── Charts.module.css
│   │   ├── ES.module.css
│   │   ├── Footer.module.css
│   │   ├── Layout.module.css
│   │   ├── Memo.module.css
│   │   ├── Navbar.module.css
│   │   ├── Syscall.module.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── styles.d.ts
│── Dockerfile
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
│── tsconfig.app.json
│── tsconfig.json
│── tsconfig.node.json
│── tsconfig.ts
│── vite.config.ts
```
