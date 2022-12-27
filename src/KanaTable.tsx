import { FC } from "react";

type Props = {
  kanaGyoList: string[][];
  showKana: string;
  onKanaClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const KanaTable: FC<Props> = ({
  kanaGyoList,
  showKana,
  onKanaClick,
}) => {
  return (
    <div className="p-5">
      <div className="flex flex-row-reverse justify-center text-4xl text-gray-800 font-display">
        {kanaGyoList.map((kanaGyo) => {
          return (
            <p className="vertical-rl m-1" key={kanaGyo[0]}>
              {kanaGyo.map((kanamoji) => {
                return (
                  <a
                    className={`${
                      kanamoji == showKana ? "bg-gray-200" : ""
                    } hover:cursor-pointer`}
                    key={kanamoji}
                    data-value={kanamoji}
                    onClick={(e) => onKanaClick(e)}
                  >
                    {kanamoji}
                  </a>
                );
              })}
            </p>
          );
        })}
      </div>
    </div>
  );
};
