# Pack +100 Projetos de Sítios Produtivos

Este é o código fonte da Landing Page Premium do Pack +100 Projetos de Sítios Produtivos.

## 🚀 Como Sincronizar com o GitHub (Solução de Erros)

Se o comando `git push` falhar, siga exatamente estes passos no terminal:

### 1. Configure sua identidade (se for a primeira vez)
```bash
git config --global user.email "seu-email@exemplo.com"
git config --global user.name "Seu Nome"
```

### 2. Reinicie a conexão com o repositório
```bash
git remote remove origin
git remote add origin https://github.com/soarezsamilla-alt/Projetos-de-Sitios.git
```

### 3. Prepare os arquivos
```bash
git add .
git commit -m "feat: atualizações de design e estrutura"
```

### 4. Envie para o GitHub (Atenção à Senha!)
```bash
git push -f origin main
```

---

### ⚠️ Importante: O erro persiste?
Se o terminal pedir **Username** e **Password**, siga estas regras:
1. **Username**: Digite seu usuário do GitHub.
2. **Password**: **NÃO USE SUA SENHA.** O GitHub exige um **Personal Access Token (PAT)**.

**Como gerar o Token (PAT):**
1. Vá em seu GitHub: `Settings` -> `Developer settings` -> `Personal access tokens` -> `Tokens (classic)`.
2. Clique em `Generate new token (classic)`.
3. Dê um nome (ex: Studio) e marque a caixa **'repo'**.
4. Copie o código gerado.
5. **Cole esse código no lugar da senha no terminal.**

---

## Tecnologias Utilizadas
- Next.js 15
- Tailwind CSS
- Genkit (IA)
- ShadCN UI
- Lucide Icons
