function positionSize(tradeType, entryPrice, stoploss, capital, riskPercentage) {
    if (tradeType === 'LONG' && stoploss >= entryPrice) {
      return false;
    } else if (tradeType === 'SHORT' && stoploss <= entryPrice) {
      return false;
    }
    let riskPerShare = Math.abs(entryPrice - stoploss);
  
    let totalRiskAmount = (capital * riskPercentage) / 100;
  
    let position = Math.round(totalRiskAmount / riskPerShare);
  
    return position;
  }

  console.log(positionSize('LONG', 3, 2.95, 10000, 2));