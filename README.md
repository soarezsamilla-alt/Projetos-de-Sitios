# Pack +100 Projetos de Sítios Produtivos

Este é o código fonte da Landing Page Premium do Pack +100 Projetos de Sítios Produtivos.

## 🚀 Como Sincronizar com o GitHub (Solução Definitiva)

Se o comando `git push` falhar, siga exatamente estes passos:

### 1. Gerar seu Token (Senha Especial)
O GitHub não aceita mais sua senha comum no terminal. Você precisa de um **PAT (Personal Access Token)**:
1. Vá em seu GitHub: `Settings` -> `Developer settings` -> `Personal access tokens` -> `Tokens (classic)`.
2. Clique em `Generate new token (classic)`.
3. Dê um nome (ex: Studio) e **marque a caixa 'repo'**.
4. Clique em gerar e **COPIE o código**.

### 2. Configurar o Git no Terminal do Studio
Copie e cole um por um:
```bash
git config --global user.email "seu-email@exemplo.com"
git config --global user.name "Seu Nome"
git remote remove origin
git remote add origin https://github.com/soarezsamilla-alt/Projetos-de-Sitios.git
```

### 3. Enviar os Arquivos
```bash
git add .
git commit -m "feat: atualizações de design e estrutura"
git push -f origin main
```
**Quando pedir a senha:** Cole o **Token** que você copiou no passo 1 (não aparecerá nada enquanto você cola, apenas cole e aperte Enter).

---

## Tecnologias Utilizadas
- Next.js 15
- Tailwind CSS
- Genkit (IA)
- ShadCN UI
- Lucide Icons
