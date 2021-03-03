export const allCountTexts = (t) => {
  return t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
};

export const countTexts = (t) => {
  let onlyTitles = t.match(/^#+ .+\n/gm);
  if (onlyTitles) {
    let allTitles = onlyTitles.map((value) => {
      return value.length;
    });
    let numOfAllTitles = allTitles.reduce((a, b) => {
      return a + b;
    });
    return allCountTexts(t).length - numOfAllTitles - countCode(t);
  } else {
    return allCountTexts(t).length;
  }
};

export const countCode = (t) => {
  let fixT = t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
  let onlyCodes = fixT.match(/```[a-zA-Z]+([^```]*)```/gm);
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
  let freshCode = t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
  let onlyCodes = freshCode.match(/```[a-zA-Z]+([^```]*)```/gm);
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
