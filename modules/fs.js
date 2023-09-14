const { error } = require("console");
const fs = require("fs");
const path = require("path");

// make dir

/*
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso");
});
*/

// Criar arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso");

    // adicionar conteudo a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " hello world!!!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log("Arquivo modificado com sucesso");
      }
    );

    // ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);
