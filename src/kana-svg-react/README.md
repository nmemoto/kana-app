# kana-app/src/kana-svg-react

このReactコンポーネントは、[KanjiVG/kanjivg](https://github.com/KanjiVG/kanjivg)のSVGファイルを元に作成された。

作成方法は以下です。

```bash
git clone --depth 1 https://github.com/KanjiVG/kanjivg
mkdir -p kana-svg kana-svg-edit
python main.py
ls kana-svg | while read line; do cat kana-svg/$line | sed -e 's/ kvg:element=\".\"//'| sed -e 's/ kvg:type=\".\"//' > kana-svg-edit/$line ; done
npx @svgr/cli -d kana-svg-react kana-svg-edit
```

```python:main.py
# %%
import shutil

src_dir="kanjivg/kanji"
dst_dir="kana-svg"

# %%
hiragana_list = [chr(i) for i in range(12353, 12439)]

# %%
# https://analytics-note.xyz/programming/python-kana-list/
hiragana_svg_list = [(chr(i), chr(i).encode('unicode-escape').decode('utf-8')[2:].zfill(5)+'.svg') for i in range(12353, 12439)]

# %%
for kana_svg in hiragana_svg_list:
  shutil.copyfile(f'{src_dir}/{kana_svg[1]}', f'{dst_dir}/{kana_svg[0]}.svg')

# %%
katakana_list = [chr(i) for i in range(12449, 12539)]

katakana_svg_list = [(chr(i), chr(i).encode('unicode-escape').decode('utf-8')[2:].zfill(5)+'.svg') for i in range(12449, 12539)]

# %%
for kana_svg in katakana_svg_list:
  shutil.copyfile(f'{src_dir}/{kana_svg[1]}', f'{dst_dir}/{kana_svg[0]}.svg')
```