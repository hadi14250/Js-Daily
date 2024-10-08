# Position Size Calculator

### Requirement

A function `positionSize` that calculates the maximum number of shares you can trade based on the given trading parameters. The function will return the maximum number of shares you can trade while ensuring that the total risk on the trade does not exceed the specified percentage of your capital.

The position size is determined by:
- The entry price of the stock
- The stoploss value
- The total capital available
- The risk percentage (the maximum proportion of capital you are willing to risk on a single trade)

- **tradeType**: Can either be `'LONG'` (buying a stock) or `'SHORT'` (borrowing and selling a stock).
- **entryPrice**: The price at which you enter the trade.
- **stoploss**: The price at which you set the stoploss.
- **capital**: The total capital available for trading.
- **riskPercentage**: The percentage of capital that you are willing to risk on the trade.

For a **LONG** trade, the stoploss must be placed **below** the entry price.
For a **SHORT** trade, the stoploss must be placed **above** the entry price.

If the stoploss is not valid, the function will return `false`.

## Output Example

### Example 1:
`positionSize('LONG', 3, 2.95, 10000, 2)`

The function will return `4000`.

### Example 2:
`positionSize('SHORT', 32.50, 33, 12500, 4.5)`

The function will return `1125`.

### Example 3:
`positionSize('LONG', 3, 3.00, 10000, 2)`

The function will return `false` (invalid stoploss).

### Example 4:
`positionSize('SHORT', 4.54, 4.53, 6000, 3.75)`

The function will return `false` (invalid stoploss).

<br>

## Code Explanation

The function first validates the stoploss based on the trade type:
- For **LONG** trades, the stoploss should be less than the entry price.
- For **SHORT** trades, the stoploss should be greater than the entry price.

Then the risk per share is calculated as the absolute difference between the entry price and the stoploss.

Next, the total amount of risk is calculated based on the `capital` and `riskPercentage`.

Finally, the position size is computed by dividing the total risk by the risk per share, and the result is rounded to the nearest integer.

### Example Usage
```console.log(positionSize('LONG', 3, 2.95, 10000, 2))```  
```console.log(positionSize('SHORT', 32.50, 33, 12500, 4.5))```  

### To Run

Go to terminal and run:
``` node positionSizeCalculator/positionSizeCalculator.js```
