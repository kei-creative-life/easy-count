export const countTexts = (t) => {
  let onlyTitles = t.match(/^#+ .+/gm);
  if (onlyTitles) {
    let allTitles = onlyTitles.map((value) => {
      return value.replace(/[ +\t]+/gm, "").length;
    });
    let numOfAllTitles = allTitles.reduce((a, b) => {
      return a + b;
    });
    return (
      allCountTexts(t).length -
      numOfAllTitles -
      countCode(t) -
      boldWordsParts(t) +
      sumOfAllBoldWords(t) -
      linkAndImageParts(t)
    );
  } else {
    return (
      allCountTexts(t).length -
      countCode(t) -
      boldWordsParts(t) +
      sumOfAllBoldWords(t) -
      linkAndImageParts(t)
    );
  }
};

export const allCountTexts = (t) => {
  return t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
};

export const countCode = (t) => {
  let onlyCodes = allCountTexts(t).match(/```[a-zA-Z]+([^```]*)```/gm);
  if (onlyCodes) {
    let onlyCode = onlyCodes.map((code) => {
      return code.length;
    });
    let sumOnlyCode = onlyCode.reduce((a, b) => {
      return a + b;
    });
    return sumOnlyCode;
  } else {
    return 0;
  }
};

// 純粋なコードの中身だけ抜粋
export const countOnlyCode = (t) => {
  let onlyCodes = allCountTexts(t).match(/```[a-zA-Z]+([^```]*)```/gm);
  if (onlyCodes) {
    let onlyCode = onlyCodes.map((code) => {
      return code.replace(/```/gm, "").length;
    });
    let sumOnlyCode = onlyCode.reduce((a, b) => {
      return a + b;
    });
    return sumOnlyCode;
  } else {
    return 0;
  }
};

// リンク&画像部分（[リンク文字](URL)&![文字](画像のURL)）
export const linkAndImageParts = (t) => {
  let linkAndImageParts = allCountTexts(t).match(
    /\!?\[(.+?)\]\(https?:\/\/(.*?)\)/gm
  );
  if (linkAndImageParts) {
    let LengthsOfLinkAndImageParts = linkAndImageParts.map((value) => {
      return value.length;
    });
    let numOfLinkAndImageParts = LengthsOfLinkAndImageParts.reduce((a, b) => {
      return a + b;
    });
    return numOfLinkAndImageParts;
  } else {
    return 0;
  }
};

//画像部分のみ(![文字](画像のURL))
export const imageParts = (t) => {
  let onlyImageParts = allCountTexts(t).match(
    /\!+\[(.+?)\]\(https?:\/\/(.*?)\)/gm
  );
  if (onlyImageParts) {
    let LengthsOfOnlyImageParts = onlyImageParts.map((value) => {
      return value.length;
    });
    let numOfOnlyImageParts = LengthsOfOnlyImageParts.reduce((a, b) => {
      return a + b;
    });
    return numOfOnlyImageParts;
  } else {
    return 0;
  }
};

// 強調部分(**強調**部分)
const boldWordsParts = (t) => {
  let onlyBoldParts = allCountTexts(t).match(/\*\*([^\*]+)\*\*/gm);
  if (onlyBoldParts) {
    let LengthsOfOnlyBoldParts = onlyBoldParts.map((value) => {
      return value.length;
    });
    let numOfOnlyBoldParts = LengthsOfOnlyBoldParts.reduce((a, b) => {
      return a + b;
    });
    return numOfOnlyBoldParts;
  } else {
    return 0;
  }
};

// 強調の文字数(**強調**の中の文字のみ)
const sumOfAllBoldWords = (t) => {
  let onlyBoldWords = allCountTexts(t).match(/\*\*([^\*]+)\*\*/gm);
  if (onlyBoldWords) {
    let removeBoldMark = onlyBoldWords.map((value) => {
      return value.replace(/\*\*/gm, "").length;
    });
    let numOfBoldWord = removeBoldMark.reduce((a, b) => {
      return a + b;
    });
    return numOfBoldWord;
  } else {
    return 0;
  }
};

// 見出しの文字数
export const sumOfAllTitles = (t) => {
  return sumOfH1Title(t) + sumOfH2Title(t) + sumOfH3Title(t) + sumOfH4Title(t);
};

export const sumOfH1Title = (t) => {
  let h1TitleArray = t.match(/^# .+/gm);
  if (h1TitleArray) {
    let removedOthersForH1 = h1TitleArray.map((value) => {
      return value.replace(/^# /gm, "").replace(/[ +　+]/gm, "").length;
    });
    let numOfH1Title = removedOthersForH1.reduce((a, b) => {
      return a + b;
    });
    return numOfH1Title;
  } else {
    return 0;
  }
};

export const sumOfH2Title = (t) => {
  let h2TitleArray = t.match(/^## .+/gm);
  if (h2TitleArray) {
    let removedOthersForH2 = h2TitleArray.map((value) => {
      return value.replace(/^## /gm, "").replace(/[ +　+]/gm, "").length;
    });
    let numOfH2Title = removedOthersForH2.reduce((a, b) => {
      return a + b;
    });
    return numOfH2Title;
  } else {
    return 0;
  }
};
export const sumOfH3Title = (t) => {
  let h3TitleArray = t.match(/^### .+/gm);
  if (h3TitleArray) {
    let removedOthersForH3 = h3TitleArray.map((value) => {
      return value.replace(/^### /gm, "").replace(/[ +　+]/gm, "").length;
    });
    let numOfH3Title = removedOthersForH3.reduce((a, b) => {
      return a + b;
    });
    return numOfH3Title;
  } else {
    return 0;
  }
};
export const sumOfH4Title = (t) => {
  let h4TitleArray = t.match(/^#### .+/gm);
  if (h4TitleArray) {
    let removedOthersForH4 = h4TitleArray.map((value) => {
      return value.replace(/^#### /gm, "").replace(/[ +　+]/gm, "").length;
    });
    let numOfH4Title = removedOthersForH4.reduce((a, b) => {
      return a + b;
    });
    return numOfH4Title;
  } else {
    return 0;
  }
};
