<div align="center">
  ![banner](https://github.com/(colocar a img aqui))
</div>

<br id="topo">
<p align="center">
    <a href="#sobre">Sobre</a> | 
    <a href="#protótipo">Protótipo</a> |  
    <a href="#apresentação">Apresentação</a> | 
    <a href="#docker">Docker</a> |       
    <a href="#tecnologias">Tecnologias</a> |    
    <a href="#integrantes">Equipe</a>
</p>

# 🍃 Grupo Ecosrev

## 👤 Integrantes

| Nome | GitHub |
| ----- | ------ |
| **Gabriel Yamaoka Bernardes** | [YamaokaK](https://github.com/YamaokaK) |
| **João Lucas Melo** | [JoaoLucasMdO](https://github.com/JoaoLucasMdO) |
| **Laura Jane Antunes** | [LauraJaneAntunes](https://github.com/LauraJaneAntunes) |
| **Mariana Hirata** | [marianakakimoto](https://github.com/marianakakimoto) |
| **Mateus Ferreira** | [AEntropia](https://github.com/AEntropia) |

---

## 📃 Sobre

O **EcosRev** é um website criado com o objetivo de incentivar o descarte correto de resíduos eletroeletrônicos, promovendo a conexão entre empresas coletoras e cidadãos. O projeto visa aumentar a conscientização ambiental e melhorar o processo de descarte, contribuindo para a preservação do meio ambiente.

---

## 💡 Protótipo

Acesse o protótipo interativo no Figma:  
[Protótipo no Figma](https://www.figma.com/design/9qf7Ry7BcaML25kAtYWB17/Untitled)

---

## 🌐 Tecnologias Utilizadas

- **Frontend**: React.js, Next.js, Typescript, Atomic Design
- **Backend**: Node.js, Express.js, MongoDB

---

## 🎬 Apresentação

(Adicionar o link ou conteúdo para a apresentação aqui)

---

## Docker ![Docker Icon](https://upload.wikimedia.org/wikipedia/commons/3/39/Docker_logo.png)

### Construir a Imagem do Frontend

docker build -t ecosrev-frontend-app .

# Executar o container
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://localhost:4000/api

front-end: https://hub.docker.com/r/yamaokak/ecosrev-frontend

-----------------------------------------------------------

### Construir a Imagem do Backend

docker build -t ecosrev-backend .

# Executar o container
docker run -p 4000:4000 --env-file .env ecosrev-backend

back-end: https://hub.docker.com/r/yamaokak/ecosrev-backend 

----------------------------------------------------------

### Para a junção das imagens front e back em um unico container
docker-compose up --build

