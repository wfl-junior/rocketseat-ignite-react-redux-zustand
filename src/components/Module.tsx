import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  title: string;
  number: number;
  amountOfLessons: number;
}

export function Module({
  title,
  number,
  amountOfLessons,
}: ModuleProps): JSX.Element | null {
  return (
    <div>
      <button className="flex w-full items-center gap-3 p-4 bg-zinc-800">
        <span className="flex w-10 aspect-square rounded-full items-center justify-center bg-zinc-950 text-xs">
          {number}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>

          <span className="text-xs text-zinc-400">
            {amountOfLessons} aula{amountOfLessons !== 1 && "s"}
          </span>
        </div>

        <ChevronDown className="w-5 aspect-square text-zinc-400 ml-auto" />
      </button>

      <nav className="relative flex-col flex gap-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
        <Lesson title="Fundamentos do Redux" duration="09:13" />
      </nav>
    </div>
  );
}
