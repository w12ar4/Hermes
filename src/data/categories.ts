export interface ChoiceOption {
  id: string
  /** 短いラベル(ボタンに表示) */
  label: string
  /** 絵文字アイコン(図示用) */
  icon: string
  /** 読み上げる文章。省略時は label をそのまま読み上げる */
  speech?: string
}

export interface Category {
  id: string
  label: string
  icon: string
  /** ボタンの色テーマ */
  color: string
  /** 「べつのせんたくし」を押すたびに切り替わる選択肢のページ */
  pages: ChoiceOption[][]
}

export const categories: Category[] = [
  {
    id: 'feelings',
    label: 'いまのきもち',
    icon: '😊',
    color: '#f472b6',
    pages: [
      [
        { id: 'happy', label: 'うれしい', icon: '😄' },
        { id: 'sad', label: 'かなしい', icon: '😢' },
        { id: 'angry', label: 'おこってる', icon: '😠' },
        { id: 'tired', label: 'つかれた', icon: '😴' },
        { id: 'fun', label: 'たのしい', icon: '😆' },
        { id: 'anxious', label: 'ふあん', icon: '😟' },
      ],
      [
        { id: 'lonely', label: 'さみしい', icon: '🥺' },
        { id: 'surprised', label: 'びっくりした', icon: '😲' },
        { id: 'excited', label: 'わくわくする', icon: '🤩' },
        { id: 'scared', label: 'こわい', icon: '😱' },
        { id: 'hurt-feeling', label: 'いやなきもち', icon: '😣' },
        { id: 'fine', label: 'げんき', icon: '💪' },
      ],
      [
        { id: 'bored', label: 'つまらない', icon: '😑' },
        { id: 'embarrassed', label: 'はずかしい', icon: '😳' },
        { id: 'proud', label: 'とくいげ', icon: '😌' },
        { id: 'confused', label: 'こまってる', icon: '😵' },
        { id: 'calm', label: 'おちついてる', icon: '🙂' },
        { id: 'love', label: 'だいすき', icon: '🥰' },
      ],
    ],
  },
  {
    id: 'body',
    label: 'からだ・げんき',
    icon: '🩺',
    color: '#60a5fa',
    pages: [
      [
        { id: 'head-hurt', label: 'あたまがいたい', icon: '🤕' },
        { id: 'stomach-hurt', label: 'おなかがいたい', icon: '🤢' },
        { id: 'sleepy', label: 'ねむい', icon: '😴' },
        { id: 'hungry', label: 'おなかすいた', icon: '🍚' },
        { id: 'thirsty', label: 'のどかわいた', icon: '🥤' },
        { id: 'toilet', label: 'トイレいきたい', icon: '🚻' },
      ],
      [
        { id: 'cold', label: 'さむい', icon: '🥶' },
        { id: 'hot', label: 'あつい', icon: '🥵' },
        { id: 'sick', label: 'きもちわるい', icon: '🤮' },
        { id: 'fever', label: 'ねつがあるかも', icon: '🌡️' },
        { id: 'exhausted', label: 'すごくつかれた', icon: '😩' },
        { id: 'ok', label: 'げんきです', icon: '😊' },
      ],
      [
        { id: 'itchy', label: 'かゆい', icon: '🫳' },
        { id: 'dizzy', label: 'めまいがする', icon: '💫' },
        { id: 'cough', label: 'せきがでる', icon: '😷' },
        { id: 'medicine', label: 'くすりがほしい', icon: '💊' },
        { id: 'rest', label: 'やすみたい', icon: '🛌' },
        { id: 'better', label: 'よくなった', icon: '✨' },
      ],
    ],
  },
  {
    id: 'food',
    label: 'たべもの・のみもの',
    icon: '🍽️',
    color: '#fb923c',
    pages: [
      [
        { id: 'bread', label: 'パン', icon: '🍞' },
        { id: 'rice', label: 'ごはん', icon: '🍚' },
        { id: 'fruit', label: 'くだもの', icon: '🍎' },
        { id: 'snack', label: 'おかし', icon: '🍪' },
        { id: 'milk', label: 'ぎゅうにゅう', icon: '🥛' },
        { id: 'water', label: 'おみず', icon: '💧' },
      ],
      [
        { id: 'more', label: 'もっとほしい', icon: '🙌', speech: 'もっとほしいです' },
        { id: 'no-more', label: 'もういらない', icon: '🙅', speech: 'もういらないです' },
        { id: 'yummy', label: 'おいしい', icon: '😋' },
        { id: 'not-tasty', label: 'すきじゃない', icon: '😖' },
        { id: 'want-hot', label: 'あたたかいのがいい', icon: '♨️' },
        { id: 'want-cold', label: 'つめたいのがいい', icon: '🧊' },
      ],
      [
        { id: 'noodle', label: 'めん', icon: '🍜' },
        { id: 'soup', label: 'スープ', icon: '🥣' },
        { id: 'egg', label: 'たまご', icon: '🥚' },
        { id: 'vegetable', label: 'やさい', icon: '🥦' },
        { id: 'juice', label: 'ジュース', icon: '🧃' },
        { id: 'ice', label: 'アイス', icon: '🍨' },
      ],
    ],
  },
  {
    id: 'play',
    label: 'あそび',
    icon: '🧸',
    color: '#34d399',
    pages: [
      [
        { id: 'toy', label: 'あそびたい', icon: '🧸' },
        { id: 'game', label: 'ゲームしたい', icon: '🎮' },
        { id: 'draw', label: 'おえかきしたい', icon: '🖍️' },
        { id: 'block', label: 'つみきしたい', icon: '🧱' },
        { id: 'puzzle', label: 'パズルしたい', icon: '🧩' },
        { id: 'ball', label: 'ボールあそび', icon: '⚽' },
      ],
      [
        { id: 'together', label: 'いっしょにあそぼう', icon: '🤝' },
        { id: 'alone-play', label: 'ひとりであそびたい', icon: '🧍' },
        { id: 'pet', label: 'どうぶつとあそびたい', icon: '🐶' },
        { id: 'pretend', label: 'ごっこあそび', icon: '🎭' },
        { id: 'sing', label: 'うたいたい', icon: '🎤' },
        { id: 'chase', label: 'おにごっこしたい', icon: '🏃' },
      ],
    ],
  },
  {
    id: 'spend-time',
    label: 'すごしかた',
    icon: '🛋️',
    color: '#2dd4bf',
    pages: [
      [
        { id: 'book', label: 'ほんをよみたい', icon: '📖' },
        { id: 'tv', label: 'テレビみたい', icon: '📺' },
        { id: 'outside', label: 'そとにいきたい', icon: '🌳' },
        { id: 'music', label: 'おんがくききたい', icon: '🎵' },
        { id: 'alone', label: 'ひとりでいたい', icon: '🚪' },
        { id: 'nap', label: 'おやすみしたい', icon: '🛏️' },
      ],
      [
        { id: 'walk', label: 'さんぽしたい', icon: '🚶' },
        { id: 'swim', label: 'プールいきたい', icon: '🏊' },
        { id: 'video', label: 'どうがみたい', icon: '🎬' },
        { id: 'quiet', label: 'しずかにすごしたい', icon: '🤫' },
        { id: 'bath', label: 'おふろにはいりたい', icon: '🛁' },
        { id: 'help-out', label: 'おてつだいしたい', icon: '🧹' },
      ],
    ],
  },
  {
    id: 'direction',
    label: 'ほうこう',
    icon: '🧭',
    color: '#fbbf24',
    pages: [
      [
        { id: 'up', label: 'うえ', icon: '🔼' },
        { id: 'down', label: 'した', icon: '🔽' },
        { id: 'right', label: 'みぎ', icon: '▶️' },
        { id: 'left', label: 'ひだり', icon: '◀️' },
        { id: 'forward', label: 'まえ', icon: '⏩' },
        { id: 'backward', label: 'うしろ', icon: '⏪' },
      ],
      [
        { id: 'here', label: 'ここ', icon: '📍' },
        { id: 'over-there', label: 'あっち', icon: '👉' },
        { id: 'over-here', label: 'こっち', icon: '👈' },
        { id: 'near', label: 'ちかく', icon: '🤏' },
        { id: 'far', label: 'とおく', icon: '🔭' },
        { id: 'turn', label: 'まがって', icon: '🔀' },
      ],
    ],
  },
  {
    id: 'answers',
    label: 'へんじ',
    icon: '✅',
    color: '#a78bfa',
    pages: [
      [
        { id: 'yes', label: 'はい', icon: '⭕' },
        { id: 'no', label: 'いいえ', icon: '❌' },
        { id: 'dontknow', label: 'わからない', icon: '🤷' },
        { id: 'wait', label: 'まって', icon: '✋' },
        { id: 'help', label: 'てつだって', icon: '🙏' },
        { id: 'different', label: 'ちがうよ', icon: '🙅' },
      ],
      [
        { id: 'ok2', label: 'だいじょうぶ', icon: '👍' },
        { id: 'again', label: 'もういちど いって', icon: '🔁' },
        { id: 'thanks', label: 'ありがとう', icon: '🙏' },
        { id: 'sorry', label: 'ごめんね', icon: '🙇' },
        { id: 'tellmore', label: 'もっとおしえて', icon: '❓' },
        { id: 'done', label: 'できたよ', icon: '🎉' },
      ],
      [
        { id: 'maybe', label: 'たぶん', icon: '🤔' },
        { id: 'later', label: 'あとで', icon: '⏰' },
        { id: 'now', label: 'いま', icon: '👉' },
        { id: 'stop', label: 'やめて', icon: '🛑' },
        { id: 'continue', label: 'つづけて', icon: '▶️' },
        { id: 'love-it', label: 'すき', icon: '❤️' },
      ],
    ],
  },
  {
    id: 'help',
    label: 'たすけて・こまった',
    icon: '🆘',
    color: '#f87171',
    pages: [
      [
        { id: 'sos', label: 'たすけて', icon: '🆘', speech: 'たすけてください' },
        { id: 'painful', label: 'いたいところがある', icon: '😣' },
        { id: 'scared2', label: 'こわいことがあった', icon: '😨' },
        { id: 'lost', label: 'まいごになった', icon: '🧭' },
        { id: 'need-adult', label: 'おとなをよんで', icon: '🙋' },
        { id: 'emergency', label: 'きゅうきゅうしゃをよんで', icon: '🚑' },
      ],
      [
        { id: 'toilet-urgent', label: 'トイレにいきたい', icon: '🚻' },
        { id: 'want-parent', label: 'おかあさんおとうさんによびたい', icon: '👨‍👩‍👧' },
        { id: 'stuck', label: 'うごけない', icon: '🧍' },
        { id: 'loud', label: 'うるさくてつらい', icon: '🔊' },
        { id: 'need-quiet', label: 'しずかなところにいきたい', icon: '🤫' },
        { id: 'thankyou-help', label: 'たすけてくれてありがとう', icon: '🙏' },
      ],
    ],
  },
]
