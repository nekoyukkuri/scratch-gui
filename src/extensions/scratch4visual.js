import musicImage from './assets/scratch4.0.png';

class Scratch4Visual {
  getInfo() {
    return {
      id: 'scratch4visual',
      name: 'Scratch 4.0 見た目だけ',
      blocks: [
        {
          opcode: 'dummyCommand',
          blockType: Scratch.BlockType.COMMAND,
          text: '見た目だけコマンドブロック',
          func: 'dummyCommand'
        }
      ],
      icons: {
        large: musicImage,
        small: musicImage
      }
    };
  }

  dummyCommand() {
    // 空のコマンド
  }
}

export default Scratch4Visual;
