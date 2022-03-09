import axios from "axios";
import { URLSearchParams } from "url";

export async function generateCpf() {
  const params = new URLSearchParams();
  params.append("acao", "gerar_cpf");
  params.append("pontuacao", "N");
  params.append("cpf_estado", "");

  const response = await axios.post(
    "https://www.4devs.com.br/ferramentas_online.php",
    params,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response;
}
