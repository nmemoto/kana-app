import { FC } from "react";

type Props = {
  onHiraganaClick: () => void;
  onKatakanaClick: () => void;
  kana: string;
};

export const KanaToggle: FC<Props> = ({
  onHiraganaClick,
  onKatakanaClick,
  kana,
}) => {
  return (
    <div className="flex justify-center">
      <label className="relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 border">
        <span
          className={`${kana == "ひらがな" ? "bg-blue-100" : ""} ${
            kana == "ひらがな" ? "text-gray-800" : "text-gray-400"
          } flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium `}
          onClick={onHiraganaClick}
        >
          ひらがな表
        </span>
        <span
          className={`${kana != "ひらがな" ? "bg-blue-100" : ""} ${
            kana != "ひらがな" ? "text-gray-800" : "text-gray-400"
          } flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium`}
          onClick={onKatakanaClick}
        >
          カタカナ表
        </span>
      </label>
    </div>
  );
};
