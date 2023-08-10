import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu hitórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th> Tarefa </th>
              <th> Duração </th>
              <th> Início </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Estudar </td>
              <td> 25 minutos </td>
              <td> Há cerca de 2 meses </td>
              <td>
                <Status status="inprogress"> Em andamento </Status>
              </td>
            </tr>
            <tr>
              <td> Estudar </td>
              <td> 25 minutos </td>
              <td> Há cerca de 2 meses </td>
              <td>
                <Status status="done">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td> Estudar </td>
              <td> 25 minutos </td>
              <td> Há cerca de 2 meses </td>
              <td>
                <Status status="cancel">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
