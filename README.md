<details>
  <summary>🐳 Docker: Frontend</summary>
  <p>
    Construir a Imagem do Frontend:</strong>  
    <pre><code>docker build -t ecosrev-frontend-app .</code></pre>

    <b>Executar o Container:</b>  
    <pre><code>docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://localhost:4000/api</code></pre>

    <strong>Link do Frontend no Docker Hub:</strong>  
    <a href="https://hub.docker.com/r/yamaokak/ecosrev-frontend" target="_blank">https://hub.docker.com/r/yamaokak/ecosrev-frontend</a>
  </p>
</details>

<details>
  <summary>🐳 Docker: Backend</summary>
  <p>
    <strong>Construir a Imagem do Backend:</strong>  
    <pre><code>docker build -t ecosrev-backend .</code></pre>

    <strong>Executar o Container:</strong>  
    <pre><code>docker run -p 4000:4000 --env-file .env ecosrev-backend</code></pre>

    <strong>Link do Backend no Docker Hub:</strong>  
    <a href="https://hub.docker.com/r/yamaokak/ecosrev-backend" target="_blank">https://hub.docker.com/r/yamaokak/ecosrev-backend</a>
  </p>
</details>

<details>
  <summary>🐳 Docker: Composição (Frontend + Backend)</summary>
  <p>
    <strong>Rodar Frontend e Backend no Mesmo Container:</strong>  
    <pre><code>docker-compose up --build</code></pre>
  </p>
</details>
