import connection from "../connection.js";

export async function cadastrarUsuario(novoCadastro) {

  const cmd = `
        INSERT INTO cadastros (username, email, senha, dt_registro)
          VALUES (?, ?, MD5(?), NOW());
    `;

  const [info] = await connection.query(cmd, [
    novoCadastro.username,
    novoCadastro.email,
    novoCadastro.senha,
  ]);

  return info.insertId;
}

export async function listarCadastros() {
  const cmd = `
    SELECT username, email, dt_registro
    FROM cadastros;
    `;

  const [registros] = await connection.query(cmd);
  return registros;
}

export async function contarCadastros() {
  const cmd = `
    SELECT COUNT(id)
      FROM cadastros;
    `;

  const [registros] = await connection.query(cmd);
  return registros;
}

export async function compararCadastro(email, senha) {
  const cmd = `
        SELECT username, email
          FROM cadastros
            WHERE email = ? AND senha = MD5(?)
    `;

  const [registros] = await connection.query(cmd, [email, senha]);
  return registros[0];
}

export async function listarPorEmail(email) {
  const cmd = `
    SELECT email
      FROM cadastros
        WHERE email = ?
    `;

  const [registros] = await connection.query(cmd, [email]);
  return registros[0];
}


