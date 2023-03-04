from forecastfile import forecaster
from pandas.tseries.offsets import DateOffset
import statsmodels.api as sm
import pandas as pd
#from forecastfile import forecaster

#reading file
df = pd.read_csv("AQI_pre.csv")
df.index = pd.to_datetime(df["Month"])
df.drop(columns="Month",inplace=True)

#selecting city code
#chayan make the dsa logic here
data = df[["Karimnagar"]]
data.rename(columns={ data.columns[0]: "AQI" }, inplace = True)


#calling the func
forecaster(data)
