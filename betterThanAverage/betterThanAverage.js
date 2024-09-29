function betterThanAverage(classPoints, yourPoints) {
    return ((classPoints.map(point => Number(point)).reduce((total, current) => (total + current), 0) / classPoints.length) < yourPoints)
  }
  