class Scratch4Visual {
  getInfo() {
    return {
      id: 'scratch4visual',
      name: 'Scratch 4.0 見た目だけ拡張',
      blocks: [
        {
          opcode: 'dummyCommand',
          blockType: Scratch.BlockType.COMMAND,
          text: '見た目だけコマンドブロック',
          func: 'dummyCommand'
        },
        {
          opcode: 'dummyReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: '見た目だけレポーターブロック',
          func: 'dummyReporter'
        },
        {
          opcode: 'dummyBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '見た目だけブールブロック',
          func: 'dummyBoolean'
        },
        {
          opcode: 'newCommand',
          blockType: Scratch.BlockType.COMMAND,
          text: '新しいコマンドブロック',
          func: 'newCommand'
        },
        {
          opcode: 'sayText',
          blockType: Scratch.BlockType.COMMAND,
          text: 'テキストを言う [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'こんにちは'
            }
          },
          func: 'sayText'
        },
        {
          opcode: 'getNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: '数字を返す [NUM]',
          arguments: {
            NUM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 123
            }
          },
          func: 'getNumber'
        }
      ]
    };
  }

  dummyCommand() {
    // 何もしないコマンド
  }

  dummyReporter() {
    return 'テスト';
  }

  dummyBoolean() {
    return false;
  }

  newCommand() {
    // 新しいコマンドの処理（今は空）
  }

  sayText(args) {
    console.log(args.TEXT);
  }

  getNumber(args) {
    return args.NUM;
  }
}

Scratch.extensions.register(new Scratch4Visual());
