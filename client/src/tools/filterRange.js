function filterRange (currentLevel, levelRange) {
  if (currentLevel <= levelRange[1] && currentLevel >= levelRange[0])
    return true;
  return false;
};

export default filterRange