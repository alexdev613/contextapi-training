import { Nome } from "../Nome"

interface AlunoProps {
  alunoNome: string;
  changeName: (name: string) => void;
}

export function Alunos({ alunoNome, changeName }: AlunoProps) {
  return (
    <div>
      <h3>Quantidade de alunos: 23</h3>

      <Nome nome={alunoNome} changeName={changeName} />
    </div>
  )
}