import { MoodTypes } from "../mood";

export type MoodProps = MoodTypes[]

interface IMoodStorage {
  [year: number]: {
    [month: number]: {
      [date: number]: MoodProps
    }
  }
}

export interface IDateTarget {
  y: number,
  m: number,
  d: number
}

class MoodStorageModel {
  constructor() {
    if (localStorage.getItem("mood") === null) {
      let date = new Date();
      let [y, m, d] = [date.getFullYear(), date.getMonth(), date.getDate()];

      let init: IMoodStorage = {
        [y]: {
          [m]: {
            [d]: [],
          },
        },
      };

      localStorage.setItem("mood", JSON.stringify(init));
    }
  }
  get(): IMoodStorage {
    return JSON.parse(localStorage.getItem("mood"));
  }
  set(value: IMoodStorage) {
    localStorage.setItem("mood", JSON.stringify(value));
  }
  getItem(item: IDateTarget): MoodProps {
    let { y, m, d } = item;
    const prev = this.get()
    if (!prev[y]) {
      // Year doesn't exists
      return []
    }
    if (!prev[y][m]) {
      // Month doesn't exists
      return []
    }
    if (!prev[y][m][d]) {
      // Day doesn't exists
      return []
    }

    return this.get()[y][m][d]
  }
  setItem(item: IDateTarget, value: MoodProps) {
    let { y, m, d } = item;
    let prev = this.get();

    if (!prev[y]) {
      // Year doesn't exists
      prev[y] = {};
    }
    if (!prev[y][m]) {
      // Month doesn't exists
      prev[y][m] = {}
    }
    if (!prev[y][m][d]) {
      // Day doesn't exists
      prev[y][m][d] = []
    }

    prev[y][m][d] = value
    
    this.set(prev)
    return ;
  }
}

let singleton: MoodStorageModel

const MoodStorage = () => {
  if (singleton) {
    return singleton
  }
  return new MoodStorageModel()
}

export default MoodStorage