import { FC, lazy, Suspense } from "react";

type Props = {
  showKana: string;
  kana: string;
};

export const KanaComponent: FC<Props> = ({ showKana, kana }) => {
  const KanaComponent =
    showKana.length != 0
      ? lazy(
          () => import(/* @vite-ignore */ `./kana-svg-react/${showKana}.tsx`)
        )
      : null;
  const kanaComponentProps = {
    width: "400px",
  };
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        {showKana.length == 0 && (
          <div className="flex justify-center">
            <p>うえの{kana}をおしてみてね</p>
          </div>
        )}
        {!!KanaComponent && (
          <div className="flex justify-center">
            <KanaComponent {...kanaComponentProps} />
          </div>
        )}
      </Suspense>
    </div>
  );
};
