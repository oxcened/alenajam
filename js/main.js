const myName = document.getElementById('my-name');
const bracketStart = document.getElementById('bracket-start');
const bracketEnd = document.getElementById('bracket-end');

const deleteChar = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      const { innerText } = myName;
      myName.innerText = innerText.substring(0, innerText.length - 1);
      resolve();
    }, 500);
  });
};

const writeChar = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      const { innerText } = myName;
      myName.innerText = innerText + 'e';
      myName.classList.remove('wavy');
      resolve();
    }, 500);
  });
};

const startLoader = () => {
  myName.innerText = '.';
  bracketStart.innerText = '';
  bracketEnd.innerText = '';
};

const completeLoader = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      const { innerText } = myName;
      if (innerText.length < 3) {
        myName.innerText = innerText + '.';
        resolve(completeLoader());
      } else {
        resolve();
      }
    }, 500);
  });
};

const writeName = () => {
  myName.innerText = 'Alen';
};

(async () => {
  await new Promise(resolve => window.setTimeout(() => resolve(), 1000))
  await deleteChar();
  await writeChar();
  await new Promise(resolve => window.setTimeout(() => resolve(), 1000));
  startLoader();
  await completeLoader();
  writeName();
})();
