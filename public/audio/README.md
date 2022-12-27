# kana-app/public/audio

この音声ファイルは、以下のスクリプトを用いて作成されました。

```python
 from contextlib import closing
 import boto3
 
 client = boto3.client('polly')
 
 hiragana_list = [chr(i) for i in range(12353, 12439)]
 # %%
 for hiragana in hiragana_list:
     response = client.synthesize_speech(
         Engine='neural',
         LanguageCode='ja-JP',
         OutputFormat='mp3',
         Text=hiragana,
         TextType='text',
         VoiceId='Takumi'
     )
     with closing(response['AudioStream']) as stream:
         with open(f'{hiragana}.mp3', mode='ab') as f:
             f.write(stream.read())
```