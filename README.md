## Requisitos necessários:
node 18 +

## Getting Started

git clone https://github.com/amanda-ti/lacrei.git  Amanda Teste

cd Amanda-teste

//Instale a depências
npm i instal



Servidor local: [http://localhost:3000](http://localhost:3000) 

## Deploy on Vercel

 git add .
 git commit -m "commit message"
 git push

O deploy é realizado automaticamente na Vercel a cada push na branch main. A plataforma detecta a configuração do Next.js e otimiza o build automaticamente.

## Rollback
Via Vercel: Acesse "Deployments" no dashboard, selecione o deploy anterior e clique em "Promote to Production".
Via Git: Execute git revert <hash-do-commit> e faça push. A Vercel realizará o deploy da versão revertida automaticamente.

## link Vercel
Link do projeto: https://lacrei-murex.vercel.app/

## Escolhas técnicas visuais
Criei uma pasta de componentes porque facilita a manutenção 

## Testes

