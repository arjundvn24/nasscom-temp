from pandas.tseries.offsets import DateOffset
import statsmodels.api as sm
import pandas as pd
import matplotlib.pyplot as plt

def forecaster(data):
  #forecasting the data
  model=sm.tsa.statespace.SARIMAX(data['AQI'],order=(1, 1, 1),seasonal_order=(1,1,1,12))
  results=model.fit()
  pred_date=[data.index[-1]+ DateOffset(months=x)for x in range(1,13)]
  pred_date=pd.DataFrame(index=pred_date,columns=data.columns)
  data = pd.concat([data,pred_date])
  data['AQI'].iloc[-12:] = results.predict(start = 84, end = 95, dynamic= True)  
  data.plot(figsize=(12, 8))
  data.to_csv("results.csv")
  plt.savefig("output.png")
