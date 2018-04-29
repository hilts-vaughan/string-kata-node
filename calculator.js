let changed = false;

const getDelimitterFromInput = inputString => {
  const firstLine = inputString.split('\n')[0];
  if (firstLine.startsWith('//')) {
    changed = true;
    // Then get the amount up to the semicolon and use that
    const newDelimitter = firstLine.substr(2, 11111);

    // If the new delimitter can be split into groups of matching brackets, then we should
    // split them apart and then handle them like that, otherwise we can go ahead and ignore this
    const regex = /\[(.+?)\]/gm;

    let delimitters = [newDelimitter];

    while ((m = regex.exec(newDelimitter)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        delimitters.push(match.replace('[', '').replace(']', '')); // given the match, might as well push it out
      });
    }

    // OK, now merge them together to create a regexp
    return new RegExp(delimitters.join('|'));
  }

  return /,|\n/gm;
};

const splitNumbers = numbers => {
  const currentDelimitter = getDelimitterFromInput(numbers);
  tokens = numbers.split(currentDelimitter);

  if (changed) {
    tokens = tokens.slice(1);
  }

  return tokens;
};

const validateNegatives = numbers => {
  numbers.forEach(currentNumber => {
    if (currentNumber < 0) {
      throw new Error('The number given is not allowed to be negative.');
    }
  });
};

const mapNumbers = s => {
  let mapped = s.map(number => {
    return parseInt(number, 10);
  });

  // Filter out the items too big now
  mapped = mapped.filter(item => {
    return item < 1000;
  });

  return mapped;
};

const validateTokens = tokens => {
  tokens.forEach(token => {
    if (!token) {
      throw new Error(
        'The token was empty. You need to pass in a valid number for each argument. '
      );
    }
  });
};

module.exports = numbers => {
  if (!numbers) {
    return 0;
  }

  const tokens = splitNumbers(numbers);
  validateTokens(tokens);

  const mapped = mapNumbers(tokens);
  validateNegatives(mapped);

  const sum = mapped.reduce((previous, value) => {
    return previous + value;
  }, 0);

  return sum;
};
